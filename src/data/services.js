import { faDesktop, faLaptopCode, faMobileScreenButton, faVrCardboard } from '@fortawesome/free-solid-svg-icons'

const SERVICES = [
  {
    id: 'web',
    icon: faLaptopCode,
    title: 'Website Development',
    description:
      "I build responsive, high-performing websites using modern technologies. Whether it's a static site, a portfolio or a business landing page, I make sure it is professional, fast and SEO-friendly.",
  },
  {
    id: 'mobile',
    icon: faMobileScreenButton,
    title: 'Mobile App Development',
    description:
      'I create mobile applications for Android and iOS. With a focus on smooth navigation and intuitive UI, I develop cross-platform apps tailored to your business needs, from e-commerce to personal projects.',
  },
  {
    id: 'desktop',
    icon: faDesktop,
    title: 'Windows Desktop App Development',
    description:
      'I build Windows desktop applications for everyday business work. From billing and inventory tools to custom management software, I deliver fast, reliable apps with a clean interface that are easy to install and use.',
  },
  {
    id: 'metaverse',
    icon: faVrCardboard,
    title: 'Metaverse / VR Development',
    description:
      'I develop immersive virtual experiences for Metaverse platforms. From virtual showrooms to event simulations, I bring interactive 3D environments to life, combining creativity with technology.',
  },
]

export default SERVICES
