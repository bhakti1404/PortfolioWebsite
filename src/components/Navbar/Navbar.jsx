import { useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBriefcase, faMoon, faSun, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NAV_LINKS, PROFILE } from '../../data/site'
import useActiveSection from '../../hooks/useActiveSection'
import { EASE } from '../../utils/motion'
import './Navbar.css'

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

function Navbar({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const isDark = theme === 'dark'

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navbar">
      <motion.div className="navbar__progress" style={{ scaleX: progress }} aria-hidden="true" />

      <motion.nav
        className="navbar__bar"
        aria-label="Main"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          <span className="gradient-text">B</span>hakti
        </a>

        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`navbar__link${activeId === link.id ? ' navbar__link--active' : ''}`}
                aria-current={activeId === link.id ? 'true' : undefined}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    className="navbar__underline"
                    layoutId="navbar-underline"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a
            href="#contact"
            className="btn btn--primary btn--small navbar__hire"
            title="Want to work with me?"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faBriefcase} />
            Hire Me
          </a>
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__icon-button navbar__github"
            aria-label="GitHub profile"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <button
            type="button"
            className="navbar__icon-button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                className="navbar__icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
              </motion.span>
            </AnimatePresence>
          </button>
          <button
            type="button"
            className="navbar__icon-button navbar__menu-button"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className="navbar__menu"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`navbar__menu-link${activeId === link.id ? ' navbar__menu-link--active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__menu-link"
                onClick={closeMenu}
              >
                GitHub Profile
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
