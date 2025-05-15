"use client"

import { useState, useEffect } from "react"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import "./Header.scss"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Define o breakpoint para mobile
    }

    handleResize() // Verifica o tamanho inicial
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span>FIT</span>
        </div>

        {!isMobile && (
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#depoimentos">Depoimentos</a>
            </li>
            <li>
              <a href="#planos">Planos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>

        <div className="actions">
          <ThemeToggle />
          {isMobile && (
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
