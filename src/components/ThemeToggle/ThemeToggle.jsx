"use client"

import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import "./ThemeToggle.scss"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
    >
      {theme === "light" ? <i className="fas fa-moon" /> : <i className="fas fa-sun" />}
    </button>
  )
}

export default ThemeToggle
