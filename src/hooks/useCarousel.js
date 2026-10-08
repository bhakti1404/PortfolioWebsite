import { useCallback, useEffect, useState } from 'react'

// One-slide-at-a-time carousel that loops and advances by itself.
// Pass autoPlayDelay = 0 to turn auto-advance off.
function useCarousel(slideCount, autoPlayDelay) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback((index) => setActiveIndex(index), [])

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slideCount)
  }, [slideCount])

  const goPrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + slideCount) % slideCount)
  }, [slideCount])

  const pause = useCallback(() => setIsPaused(true), [])
  const resume = useCallback(() => setIsPaused(false), [])

  // Restarting the timer on every slide change gives each slide its full time,
  // including after the visitor navigates by hand.
  useEffect(() => {
    if (isPaused || !autoPlayDelay) return undefined
    const timer = setTimeout(goNext, autoPlayDelay)
    return () => clearTimeout(timer)
  }, [activeIndex, isPaused, autoPlayDelay, goNext])

  return { activeIndex, goTo, goNext, goPrev, pause, resume }
}

export default useCarousel
