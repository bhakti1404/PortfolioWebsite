import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faPaperPlane, faXmark } from '@fortawesome/free-solid-svg-icons'
import {
  CHAT_ENDPOINT,
  CHAT_ERROR,
  CHAT_GREETING,
  CHAT_MAX_LENGTH,
  CHAT_SUGGESTIONS,
  CHAT_TITLE,
} from '../../data/chat'
import { EASE } from '../../utils/motion'
import './ChatWidget.css'

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const nextIdRef = useRef(0)
  const isSending = status === 'sending'

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    const list = listRef.current
    if (list) list.scrollTop = list.scrollHeight
  }, [messages, status, isOpen])

  const sendMessage = async (text) => {
    const question = text.trim()
    if (!question || isSending) return

    nextIdRef.current += 1
    const history = [...messages, { id: nextIdRef.current, role: 'user', text: question }]
    setMessages(history)
    setInput('')
    setStatus('sending')

    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ messages: history.map(({ role, text }) => ({ role, text })) }),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || !result.reply) throw new Error(result.error || CHAT_ERROR)

      nextIdRef.current += 1
      setMessages([...history, { id: nextIdRef.current, role: 'assistant', text: result.reply }])
      setStatus('idle')
    } catch (error) {
      // Put the unanswered question back in the box so the visitor can retry.
      setMessages(messages)
      setInput(question)
      setErrorMessage(error.message || CHAT_ERROR)
      setStatus('error')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage(input)
  }

  // The attention animation stops for good once the visitor has opened the chat.
  const handleToggle = () => {
    setHasOpened(true)
    setIsOpen((isCurrentlyOpen) => !isCurrentlyOpen)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') setIsOpen(false)
  }

  return (
    <div className="chat-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            id="chat-widget-panel"
            className="chat-widget__panel"
            aria-label={CHAT_TITLE}
            onKeyDown={handleKeyDown}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <header className="chat-widget__header">
              <h2 className="chat-widget__title">{CHAT_TITLE}</h2>
              <button
                type="button"
                className="chat-widget__close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </header>

            <div className="chat-widget__messages" ref={listRef}>
              <p className="chat-widget__message chat-widget__message--assistant">{CHAT_GREETING}</p>
              {messages.map((message) => (
                <p key={message.id} className={`chat-widget__message chat-widget__message--${message.role}`}>
                  {message.text}
                </p>
              ))}
              {isSending && (
                <p className="chat-widget__message chat-widget__message--assistant chat-widget__typing" aria-hidden="true">
                  <span className="chat-widget__dot" />
                  <span className="chat-widget__dot" />
                  <span className="chat-widget__dot" />
                </p>
              )}
              {messages.length === 0 && !isSending && (
                <ul className="chat-widget__suggestions">
                  {CHAT_SUGGESTIONS.map((suggestion) => (
                    <li key={suggestion.id}>
                      <button
                        type="button"
                        className="chat-widget__suggestion"
                        onClick={() => sendMessage(suggestion.text)}
                      >
                        {suggestion.text}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <p className={`chat-widget__status chat-widget__status--${status}`} role="status">
              {isSending && 'Assistant is typing...'}
              {status === 'error' && errorMessage}
            </p>

            <form className="chat-widget__form" onSubmit={handleSubmit}>
              <label className="chat-widget__label" htmlFor="chat-widget-input">
                Ask a question about Bhakti
              </label>
              <input
                ref={inputRef}
                id="chat-widget-input"
                className="chat-widget__input"
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Bhakti..."
                maxLength={CHAT_MAX_LENGTH}
                autoComplete="off"
              />
              <button
                type="submit"
                className="chat-widget__send"
                disabled={isSending || !input.trim()}
                aria-label="Send message"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <button
        type="button"
        className={`chat-widget__toggle${hasOpened ? '' : ' chat-widget__toggle--attention'}`}
        onClick={handleToggle}
        aria-label={isOpen ? 'Close chat' : 'Open chat with the AI assistant'}
        aria-expanded={isOpen}
        aria-controls="chat-widget-panel"
      >
        <span className="chat-widget__toggle-icon">
          <FontAwesomeIcon icon={isOpen ? faXmark : faCommentDots} />
        </span>
      </button>
    </div>
  )
}

export default ChatWidget
