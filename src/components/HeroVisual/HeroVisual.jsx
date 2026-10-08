import { motion } from 'framer-motion'
import PROJECTS from '../../data/projects'
import SKILLS from '../../data/skills'
import { PROFILE } from '../../data/site'
import { scaleIn, slideInLeft } from '../../utils/motion'
import './HeroVisual.css'

const FLOATING_SKILL_IDS = ['react', 'js', 'nodejs']
const FLOATING_SKILLS = SKILLS.filter((skill) => FLOATING_SKILL_IDS.includes(skill.id))

const codeStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } },
}

const badgeStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 1.2 } },
}

function HeroVisual() {
  return (
    <motion.div className="hero-visual" variants={scaleIn} initial="hidden" animate="visible">
      <span className="hero-visual__glow" aria-hidden="true" />

      <div className="hero-visual__window" aria-hidden="true">
        <div className="hero-visual__bar">
          <span className="hero-visual__dot hero-visual__dot--close" />
          <span className="hero-visual__dot hero-visual__dot--minimise" />
          <span className="hero-visual__dot hero-visual__dot--expand" />
          <span className="hero-visual__file">developer.js</span>
        </div>
        <motion.pre className="hero-visual__code" variants={codeStagger}>
          <motion.code className="hero-visual__line" variants={slideInLeft}>
            <span className="hero-visual__keyword">const</span> developer = {'{'}
          </motion.code>
          <motion.code className="hero-visual__line" variants={slideInLeft}>
            {'  '}
            <span className="hero-visual__property">name</span>:{' '}
            <span className="hero-visual__string">&apos;{PROFILE.name}&apos;</span>,
          </motion.code>
          <motion.code className="hero-visual__line" variants={slideInLeft}>
            {'  '}
            <span className="hero-visual__property">location</span>:{' '}
            <span className="hero-visual__string">&apos;{PROFILE.location}&apos;</span>,
          </motion.code>
          <motion.code className="hero-visual__line" variants={slideInLeft}>
            {'  '}
            <span className="hero-visual__property">builds</span>: [
            <span className="hero-visual__string">&apos;Web&apos;</span>,{' '}
            <span className="hero-visual__string">&apos;Apps&apos;</span>,{' '}
            <span className="hero-visual__string">&apos;VR&apos;</span>],
          </motion.code>
          <motion.code className="hero-visual__line" variants={slideInLeft}>
            {'  '}
            <span className="hero-visual__property">stack</span>: [
            <span className="hero-visual__string">&apos;React&apos;</span>,{' '}
            <span className="hero-visual__string">&apos;Node.js&apos;</span>],
          </motion.code>
          <motion.code className="hero-visual__line" variants={slideInLeft}>
            {'  '}
            <span className="hero-visual__property">available</span>:{' '}
            <span className="hero-visual__boolean">true</span>,
          </motion.code>
          <motion.code className="hero-visual__line" variants={slideInLeft}>
            {'}'}
            <span className="hero-visual__cursor" />
          </motion.code>
        </motion.pre>
      </div>

      <motion.div className="hero-visual__badges" variants={badgeStagger}>
        {FLOATING_SKILLS.map((skill) => (
          <motion.span
            key={skill.id}
            className={`hero-visual__badge hero-visual__badge--${skill.id}`}
            variants={scaleIn}
          >
            <img className="hero-visual__badge-image" src={skill.image} alt={skill.name} />
          </motion.span>
        ))}
        <motion.span className="hero-visual__badge hero-visual__badge--stat" variants={scaleIn}>
          <span className="hero-visual__stat">
            <strong className="gradient-text">{PROJECTS.length}</strong> live projects
          </span>
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

export default HeroVisual
