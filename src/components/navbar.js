import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import { ThemeContext } from "../context/ThemeContext"

const DarkModeToggle = ({ dark, toggleDark }) => (
  <li className="nav-item left">
    <button onClick={toggleDark}>
      Go {dark ? "Light" : "Dark"}
    </button>
  </li>
)

const DropdownMenu = ({ dark, isMenuOpen }) => {
  
  return (
  <ul className={`dropdown-menu ${dark ? "dark" : "light"} ${isMenuOpen ? "open" : ""}`}>
    <li>
      <Link to="/search">Search</Link>
    </li>
    <li>
      <Link to="/math">Math</Link>
    </li>
    <li>
      <Link to="/radio">Radio</Link>
    </li>
  </ul>
  )
}

const MenuButton = ({ isMenuOpen, toggleMenuOpen, dark }) => {
    
  return (
  <li className="nav-item right">
    <button onClick={toggleMenuOpen}>
      {isMenuOpen ? "Close" : "Menu"}
    </button>
    <DropdownMenu isMenuOpen={isMenuOpen} dark={dark} />
  </li>
  )
}

const Navbar = () => {
  const { dark, toggleDark } = useContext(ThemeContext)
  
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenuOpen = () => setMenuOpen(!isMenuOpen)

  return (
    <div className={`navbar ${dark ? "dark" : "light"}`}>
      <nav style={{ width: '100%' }}>
        <ul className="nav-list">
          <DarkModeToggle className="nav-item left" dark={dark} toggleDark={toggleDark} />
          <MenuButton className="nav-item right" isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} dark={dark} />
        </ul>
      </nav>
    </div>
  )
}

export default Navbar