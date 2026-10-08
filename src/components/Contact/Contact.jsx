import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionHeading from '../SectionHeading/SectionHeading'
import {
  CONTACT_DETAILS,
  SOCIAL_LINKS,
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_ENDPOINT,
} from '../../data/site'
import { VIEWPORT, slideInLeft, slideInRight } from '../../utils/motion'
import './Contact.css'

const STATUS_MESSAGES = {
  success: 'Thank you! Your message has been sent.',
  error: 'Something went wrong. Please try again or email me directly.',
}

function Contact() {
  const [status, setStatus] = useState('idle')
  const isSending = status === 'sending'

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const payload = { ...Object.fromEntries(new FormData(form)), access_key: WEB3FORMS_ACCESS_KEY }

    setStatus('sending')
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      if (!result.success) throw new Error(result.message)
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact section">
      <SectionHeading
        eyebrow="Say hello"
        title="Get In Touch"
        subtitle="I'm currently available to take on new projects, so feel free to send me a message about anything you want me to work on."
      />
      <div className="contact__grid">
        <motion.div
          className="contact__info"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <h3 className="contact__heading">Let&apos;s Talk</h3>
          <ul className="contact__details">
            {CONTACT_DETAILS.map((detail) => (
              <li key={detail.id} className="contact__detail card">
                <span className="contact__detail-icon">
                  <FontAwesomeIcon icon={detail.icon} />
                </span>
                {detail.href ? <a href={detail.href}>{detail.label}</a> : <span>{detail.label}</span>}
              </li>
            ))}
          </ul>
          <ul className="contact__socials">
            {SOCIAL_LINKS.map((social) => {
              // Web links open in a new tab; tel: and mailto: hand over to the phone or mail app.
              const isWebLink = social.href.startsWith('http')

              return (
                <li key={social.id}>
                  <a
                    className="contact__social"
                    href={social.href}
                    target={isWebLink ? '_blank' : undefined}
                    rel={isWebLink ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                </li>
              )
            })}
          </ul>
        </motion.div>

        <motion.form
          className="contact__form card"
          onSubmit={handleSubmit}
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <label className="contact__label" htmlFor="name">
            Name
          </label>
          <input className="contact__input" id="name" name="name" type="text" placeholder="Your name" required />

          <label className="contact__label" htmlFor="email">
            Email
          </label>
          <input className="contact__input" id="email" name="email" type="email" placeholder="you@example.com" required />

          <label className="contact__label" htmlFor="message">
            Message
          </label>
          <textarea
            className="contact__input contact__input--area"
            id="message"
            name="message"
            rows="5"
            placeholder="Type your message here..."
            required
          />

          <button type="submit" className="btn btn--primary contact__submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>

          <p className={`contact__status contact__status--${status}`} role="status">
            {STATUS_MESSAGES[status]}
          </p>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
