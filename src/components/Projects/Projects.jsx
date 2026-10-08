import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import SectionHeading from '../SectionHeading/SectionHeading'
import PROJECTS from '../../data/projects'
import useCarousel from '../../hooks/useCarousel'
import { EASE, VIEWPORT, fadeUp } from '../../utils/motion'
import './Projects.css'

const AUTO_PLAY_DELAY = 4000
// Horizontal drag distance (px) that counts as a swipe to the next or previous project.
const SWIPE_DISTANCE = 60
// How far a neighbouring slide sits from the centre, as a percentage of the slide width.
const SIDE_SHIFT = 58

// Shortest signed distance from the active slide, so the carousel loops both ways.
function getOffset(index, activeIndex, count) {
  const half = Math.floor(count / 2)
  let offset = index - activeIndex
  if (offset > half) offset -= count
  if (offset < -half) offset += count
  return offset
}

function Projects() {
  const shouldReduceMotion = useReducedMotion()
  const { activeIndex, goTo, goNext, goPrev, pause, resume } = useCarousel(
    PROJECTS.length,
    shouldReduceMotion ? 0 : AUTO_PLAY_DELAY,
  )
  const hasDraggedRef = useRef(false)

  const handleDragEnd = (_event, info) => {
    if (info.offset.x <= -SWIPE_DISTANCE) goNext()
    else if (info.offset.x >= SWIPE_DISTANCE) goPrev()
  }

  // A swipe that ends on a link must not open it.
  const handleClickCapture = (event) => {
    if (!hasDraggedRef.current) return
    event.preventDefault()
    event.stopPropagation()
    hasDraggedRef.current = false
  }

  return (
    <section id="projects" className="projects section section--band">
      <SectionHeading
        eyebrow="My work"
        title="My Projects"
        subtitle="Live projects I have designed, built and deployed. Swipe or use the arrows to browse."
      />
      <motion.div
        className="projects__carousel"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
      >
        <div className="projects__stage">
          {PROJECTS.map((project, index) => {
            const offset = getOffset(index, activeIndex, PROJECTS.length)
            const isActive = offset === 0
            const isNeighbour = Math.abs(offset) === 1

            return (
              <motion.div
                key={project.id}
                className="projects__slide"
                initial={false}
                animate={{
                  x: `${offset * SIDE_SHIFT}%`,
                  scale: isActive ? 1 : 0.72,
                  opacity: isActive ? 1 : isNeighbour ? 0.55 : 0,
                  filter: isActive ? 'blur(0px)' : 'blur(5px)',
                  zIndex: isActive ? 2 : isNeighbour ? 1 : 0,
                }}
                transition={{ duration: 0.6, ease: EASE }}
                inert={!isActive}
                aria-hidden={!isActive}
              >
                <motion.article
                  className="project-card card"
                  drag={isActive ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  dragSnapToOrigin
                  onPointerDownCapture={() => {
                    hasDraggedRef.current = false
                  }}
                  onDragStart={() => {
                    hasDraggedRef.current = true
                  }}
                  onDragEnd={handleDragEnd}
                  onClickCapture={handleClickCapture}
                >
                  <a
                    className="project-card__preview"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    draggable={false}
                  >
                    <img
                      className="project-card__image"
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      draggable={false}
                    />
                    <span className="project-card__overlay">
                      View Live <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                  </a>
                  <div className="project-card__body">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__description">{project.description}</p>
                    <ul className="project-card__tags">
                      {project.tags.map((tag) => (
                        <li key={tag} className="project-card__tag">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <div className="project-card__links">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary btn--small"
                        draggable={false}
                      >
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        Live Demo
                      </a>
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--outline btn--small"
                          draggable={false}
                        >
                          <FontAwesomeIcon icon={faGithub} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              </motion.div>
            )
          })}
        </div>

        <button
          type="button"
          className="projects__arrow projects__arrow--prev"
          onClick={goPrev}
          aria-label="Previous project"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          type="button"
          className="projects__arrow projects__arrow--next"
          onClick={goNext}
          aria-label="Next project"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <div className="projects__dots">
          {PROJECTS.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={`projects__dot${index === activeIndex ? ' projects__dot--active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Show ${project.title}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
