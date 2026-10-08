import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionHeading from '../SectionHeading/SectionHeading'
import SERVICES from '../../data/services'
import { VIEWPORT, fadeUp, staggerContainer } from '../../utils/motion'
import './Services.css'

function Services() {
  return (
    <section id="services" className="services section section--band">
      <SectionHeading
        eyebrow="What I do"
        title="My Services"
        subtitle="From a single landing page to a full product, here is how I can help."
      />
      <motion.div
        className="services__grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {SERVICES.map((service) => (
          <motion.div key={service.id} variants={fadeUp}>
            <article className="service-card card">
              <span className="service-card__icon">
                <FontAwesomeIcon icon={service.icon} />
              </span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </article>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Services
