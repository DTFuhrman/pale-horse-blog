import React, { useContext } from "react"
import { Link } from "gatsby"
import { ThemeContext } from "../context/ThemeContext"

const Navbar = () => {
  const { dark, toggleDark } = useContext(ThemeContext)

  return (
    <nav className={dark ? "dark" : "light"}>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <li style={{ display: `inline-block`, marginRight: `1rem` }}>
          <Link to="/">Blog</Link>
        </li>
        <li style={{ display: `inline-block`, marginRight: `1rem` }}>
          <Link to="/about/">About</Link>
        </li>
        <li style={{ display: `inline-block`, marginRight: `1rem` }}>
          <Link to="/more/">More</Link>
        </li>
        <li style={{ display: `inline-block`, marginRight: `1rem` }}>
          <button onClick={toggleDark}>
            Switch to {dark ? "Light" : "Dark"} Mode
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar