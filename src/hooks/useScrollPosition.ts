import { useEffect, useState } from 'react'

export function useScrollPosition(threshold = 24): boolean {
  const [passed, setPassed] = useState(false)

  useEffect(() => {
    let frame = 0

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        setPassed(window.scrollY > threshold)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [threshold])

  return passed
}
