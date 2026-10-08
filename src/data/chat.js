export const CHAT_ENDPOINT = '/api/chat'

// Must match MAX_MESSAGE_LENGTH in netlify/functions/chat.js.
export const CHAT_MAX_LENGTH = 500

export const CHAT_TITLE = "Bhakti's Assistant"

export const CHAT_GREETING =
  "Hi! I'm Bhakti's AI assistant. Ask me about Bhakti's skills, projects, experience or how to get in touch."

export const CHAT_SUGGESTIONS = [
  { id: 'services', text: 'What services do you offer?' },
  { id: 'projects', text: 'Which projects has Bhakti built?' },
  { id: 'experience', text: "What is Bhakti's experience?" },
  { id: 'contact', text: 'How can I contact Bhakti?' },
]

export const CHAT_ERROR = 'Something went wrong. Please try again or use the contact form.'
