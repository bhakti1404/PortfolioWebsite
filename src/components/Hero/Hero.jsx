import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'
import HeroVisual from '../HeroVisual/HeroVisual'
import { PROFILE } from '../../data/site'
import { fadeUp, staggerContainer } from '../../utils/motion'
import './Hero.css'

function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: PROFILE.roles,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
    })

    return () => typed.destroy()
  }, [])

  return (
    <section id="home" className="hero section">
      <span className="hero__blob hero__blob--one" aria-hidden="true" />
      <span className="hero__blob hero__blob--two" aria-hidden="true" />

      <motion.div
        className="hero__content"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero__greeting" variants={fadeUp}>
          Hello, welcome to my portfolio
        </motion.p>
        <motion.h1 className="hero__title" variants={fadeUp}>
          Hi, I&apos;m <span className="gradient-text">{PROFILE.firstName}</span>
        </motion.h1>
        <motion.p className="hero__role" variants={fadeUp}>
          a passionate <span className="hero__typed gradient-text" ref={typedRef} />
        </motion.p>
        <motion.p className="hero__summary" variants={fadeUp}>
          I design and build websites, mobile apps and immersive metaverse experiences
          that are fast, responsive and easy to use.
        </motion.p>
        <motion.div className="hero__actions" variants={fadeUp}>
          <a href="#contact" className="btn btn--primary">
            Connect With Me
          </a>
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            My Resume
          </a>
        </motion.div>
      </motion.div>

      <HeroVisual />

      <a href="#services" className="hero__scroll" aria-label="Scroll to services">
        <span className="hero__scroll-dot" />
      </a>
    </section>
  )
}

export default Hero
