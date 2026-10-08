import { motion } from 'framer-motion'
import { VIEWPORT, fadeUp, staggerContainer } from '../../utils/motion'
import './SectionHeading.css'

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="section-heading"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      <motion.p className="section-heading__eyebrow" variants={fadeUp}>
        {eyebrow}
      </motion.p>
      <motion.h2 className="section-heading__title gradient-text" variants={fadeUp}>
        {title}
      </motion.h2>
      <motion.span className="section-heading__bar" variants={fadeUp} aria-hidden="true" />
      {subtitle && (
        <motion.p className="section-heading__subtitle" variants={fadeUp}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SectionHeading
