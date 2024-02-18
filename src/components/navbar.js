import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import { ThemeContext } from "../context/ThemeContext"

const DarkModeToggle = ({ dark, toggleDark }) => (
  <li className="nav-item left">
    <button onClick={toggleDark}>
      Switch to {dark ? "Light" : "Dark"} Mode
    </button>
  </li>
)

const DropdownMenu = ({ dark, isMenuOpen }) => (
  <ul className={`dropdown-menu ${dark ? "dark" : "light"} ${isMenuOpen ? "open" : ""}`}>
    <li>
      <Link to="/calendar">Calendar</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
    <li>
      <Link to="/tags">Tags</Link>
    </li>
  </ul>
)

const MenuButton = ({ isMenuOpen, toggleMenuOpen }) => (
  <li className="nav-item right">
    <button onClick={toggleMenuOpen}>
      {isMenuOpen ? "Close" : "Menu"}
    </button>
    <DropdownMenu isMenuOpen={isMenuOpen} />
  </li>
)

const Navbar = () => {
  const { dark, toggleDark } = useContext(ThemeContext)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenuOpen = () => setMenuOpen(!isMenuOpen)

  return (
    <div className={`navbar ${dark ? "dark" : "light"}`}>
      <nav style={{ width: '100%' }}>
        <ul className="nav-list">
          <li className="nav-item left">
            <DarkModeToggle dark={dark} toggleDark={toggleDark} />
          </li>
          <li className="nav-item right"> 
          <MenuButton isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar