import { useEffect, useState } from 'react'


export function useActiveSection(sectionIds: readonly string[], fallbackId: string): string {
  const [activeId, setActiveId] = useState(fallbackId)
  const key = sectionIds.join('|')

  useEffect(() => {
    const ids = key.split('|').filter(Boolean)
    if (ids.length === 0) return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) return

    const visibility = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }

        let best: string | null = null
        let bestRatio = 0
        for (const id of ids) {
          const ratio = visibility.get(id) ?? 0
          if (ratio > bestRatio) {
            best = id
            bestRatio = ratio
          }
        }

        if (best) setActiveId(best)
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.15, 0.35, 0.6, 0.9],
      },
    )

    for (const element of elements) observer.observe(element)
    return () => observer.disconnect()
  }, [key])

  return activeId
}
