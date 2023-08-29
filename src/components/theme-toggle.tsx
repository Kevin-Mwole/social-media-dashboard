import { slider, themeToggle } from "./theme-toggle.css"
import { useEffect, useLayoutEffect, useState } from "react"

const themeStorageKey = "color-preference"
const themeAttribute = "userTheme"

export const themes = ["light", "dark"] as const
type Theme = typeof themes[number]

function getLocalStorageTheme(): Theme | null {
  const storageTheme: unknown = window.localStorage.getItem(themeStorageKey)
  const maybeTheme = themes.find((theme) => theme === storageTheme)
  return maybeTheme ?? null
}

function getMediaQueryTheme(): Theme | null {
  const mql = window.matchMedia("(prefers-color-scheme: dark")
  const hasMediaQueryPreference = typeof mql.matches === "boolean"

  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light"
  }
  return null
}

function useTheme(defaultTheme: Theme = "light") {
  const [savedPreference, setSavedPreference] = useState<Theme | null>(null)
  const [mediaQueryPrefernce, setMediaQueryPreference] = useState<Theme | null>(
    null
  )

  // we want to figure out the initial value before painting
  // so we don't have a chance to display the wrong value
  useLayoutEffect(function loadInitialThemeValue() {
    const localStorageTheme = getLocalStorageTheme()
    const mediaQueryTheme = getMediaQueryTheme()
    if (localStorageTheme) {
      setSavedPreference(localStorageTheme)
    }
    if (mediaQueryTheme) {
      setMediaQueryPreference(mediaQueryTheme)
    }
  }, [])

  useLayoutEffect(
    function updateSavedThemePreference() {
      if (savedPreference) {
        document.documentElement.dataset[themeAttribute] = savedPreference
        window.localStorage.setItem(themeStorageKey, savedPreference)
      }
    },
    [savedPreference]
  )

  const theme = savedPreference ?? mediaQueryPrefernce ?? defaultTheme
  function toggleTheme() {
    setSavedPreference(theme === "light" ? "dark" : "light")
  }

  return { theme, toggleTheme }
}

export function ThemeToggle(): JSX.Element {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      type="button"
      className={themeToggle}
    >
      Dark Mode
      <span className={slider} aria-hidden />
    </button>
  )
}
