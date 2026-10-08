import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const PROFILE = {
  name: 'Bhakti Gangurde',
  firstName: 'Bhakti',
  location: 'Nashik, India',
  roles: ['Web Developer', 'App Developer', 'Metaverse Developer'],
  githubUrl: 'https://github.com/bhakti1404',
  resumeUrl: '/Bhakti_Resume.pdf',
}

export const CONTACT_DETAILS = [
  { id: 'email', icon: faEnvelope, label: 'bhakti1404@gmail.com', href: 'mailto:bhakti1404@gmail.com' },
  { id: 'phone', icon: faPhone, label: '+91 70585 28767', href: 'tel:+917058528767' },
  { id: 'location', icon: faLocationDot, label: 'Nashik, Maharashtra, India' },
]

const WHATSAPP_GREETING = 'Hi Bhakti, I saw your portfolio and would like to connect.'

export const SOCIAL_LINKS = [
  { id: 'github', icon: faGithub, label: 'GitHub', href: 'https://github.com/bhakti1404' },
  {
    id: 'linkedin',
    icon: faLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bhaktigangurde/',
  },
  {
    id: 'instagram',
    icon: faInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/bhakti.gangurde_/',
  },
  {
    id: 'whatsapp',
    icon: faWhatsapp,
    label: 'Message me on WhatsApp',
    href: `https://wa.me/917058528767?text=${encodeURIComponent(WHATSAPP_GREETING)}`,
  },
  { id: 'phone', icon: faPhone, label: 'Call me', href: 'tel:+917058528767' },
  { id: 'email', icon: faEnvelope, label: 'Email me', href: 'mailto:bhakti1404@gmail.com' },
]

// Web3Forms access keys are public by design: they only allow posting to the owner's inbox.
export const WEB3FORMS_ACCESS_KEY = '4bfc164a-53dd-4d8d-a19f-9bba44134388'
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
