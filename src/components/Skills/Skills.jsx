import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading/SectionHeading'
import SKILLS from '../../data/skills'
import { VIEWPORT, scaleIn } from '../../utils/motion'
import './Skills.css'

const skillsStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

function Skills() {
  return (
    <section id="skills" className="skills section">
      <SectionHeading
        eyebrow="My toolbox"
        title="Skills and Tools"
        subtitle="The skills, tools and technologies I use."
      />
      <motion.ul
        className="skills__grid"
        variants={skillsStagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {SKILLS.map((skill) => (
          <motion.li key={skill.id} variants={scaleIn}>
            <div className="skill card">
              <img className="skill__image" src={skill.image} alt="" />
              <span className="skill__name">{skill.name}</span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default Skills
