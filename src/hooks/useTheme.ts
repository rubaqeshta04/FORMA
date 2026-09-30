import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    return null
  }
}

function readInitialTheme(): Theme {
  if (typeof document === 'undefined') return 'dark'

  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      return
    }
  }, [theme])

  useEffect(() => {
    const list = window.matchMedia('(prefers-color-scheme: light)')

    const onChange = (event: MediaQueryListEvent) => {
      if (readStoredTheme() !== null) return
      setTheme(event.matches ? 'light' : 'dark')
    }

    list.addEventListener('change', onChange)
    return () => list.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, setTheme, toggleTheme }
}
