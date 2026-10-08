import { useEffect, useState } from 'react'

// A section is active while it crosses a thin band just above the middle of the viewport.
const OBSERVER_OPTIONS = { rootMargin: '-45% 0px -50% 0px' }

function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id)
      })
    }, OBSERVER_OPTIONS)

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}

export default useActiveSection
