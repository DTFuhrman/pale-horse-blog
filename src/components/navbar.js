import React, { useContext } from "react"
import { Link } from "gatsby"
import { ThemeContext } from "../context/ThemeContext"

const Navbar = () => {
  const { dark, toggleDark } = useContext(ThemeContext)
  
  return (
    <div className={`navbar ${dark ? "dark" : "light"}`}>
      <nav>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <li style={{ display: `inline-block`, marginRight: `1rem` }}>
            <button onClick={toggleDark}>
              Switch to {dark ? "Light" : "Dark"} Mode
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar