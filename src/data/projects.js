import samarthElectronics from '../assets/projects/samarth-electronics.webp'
// SmartBiz projects are temporarily hidden; uncomment these and their entries below to restore.
// import smartbizRetail from '../assets/projects/smartbiz-retail.webp'
// import smartbizDesk from '../assets/projects/smartbiz-desk.webp'
import quotemaker from '../assets/projects/quotemaker.webp'
import akhandaIt from '../assets/projects/akhanda-it.webp'
import razzleHotels from '../assets/projects/razzle-hotels.webp'
import razzleMenu from '../assets/projects/razzle-menu.webp'

const PROJECTS = [
  {
    id: 'samarth-electronics',
    title: 'Samarth Electronics',
    image: samarthElectronics,
    description:
      'Business website for a Nashik CCTV and weighing-scale dealer, with a language switch, light and dark themes, and one-tap call and WhatsApp buttons.',
    tags: ['Expo', 'React Native Web'],
    liveUrl: 'https://samarth-electronics.netlify.app',
  },
  // {
  //   id: 'smartbiz-retail',
  //   title: 'SmartBiz Retail & Wholesale',
  //   image: smartbizRetail,
  //   description:
  //     'Retail and wholesale management demo covering POS billing, inventory, customers, schemes, purchases and payments, with role-based demo accounts.',
  //   tags: ['React', 'Vite'],
  //   liveUrl: 'https://smartbiz-demo-akhanda.netlify.app',
  // },
  {
    id: 'akhanda-it',
    title: 'Akhanda IT Solutions',
    image: akhandaIt,
    description:
      'Company website for an IT firm in Nashik offering app and web development, software solutions, digital marketing and metaverse services.',
    tags: ['HTML', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://serene-palmier-89c42c.netlify.app',
  },
  // {
  //   id: 'smartbiz-desk',
  //   title: 'SmartBiz Desk',
  //   image: smartbizDesk,
  //   description:
  //     'Cross-platform SmartBiz app with email sign-in and role-based accounts for admins and team members.',
  //   tags: ['Expo', 'React Native Web'],
  //   liveUrl: 'https://smartbiz-desk.netlify.app',
  // },
  {
    id: 'razzle-hotels',
    title: 'Razzle Hotels',
    image: razzleHotels,
    description:
      'Landing experience for Razzle Hotels & Banquet presenting its restaurants, party halls, suite villas and lawns.',
    tags: ['React'],
    liveUrl: 'https://papaya-sopapillas-3e3fa7.netlify.app',
  },
  {
    id: 'quotemaker',
    title: 'QuoteMaker',
    image: quotemaker,
    description:
      'Quotation app for small businesses: sign in to a business account and prepare quotes, backed by a hosted API.',
    tags: ['Expo', 'REST API'],
    liveUrl: 'https://quotemaker-app-26597a76.netlify.app',
  },
  {
    id: 'razzle-menu',
    title: 'Razzle Menu',
    image: razzleMenu,
    description:
      'Digital restaurant menu opened from a QR code, with dish search, category tabs and prices for every dish.',
    tags: ['React', 'Vite'],
    liveUrl: 'https://classy-puffpuff-64065a.netlify.app',
    codeUrl: 'https://github.com/bhakti1404/RazzleQR',
  },
]

export default PROJECTS
