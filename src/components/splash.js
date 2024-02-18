import React, { useContext } from "react"
import { Link } from "gatsby"
import darkSplash from "../images/darkSplash.png"
import lightSplash from "../images/lightSplash.png"
import { ThemeContext } from "../context/ThemeContext"

const Splash = () => {
  const { dark } = useContext(ThemeContext)

  return (
    <div className="splash">
      <Link to="/">
        <img src={dark ? darkSplash : lightSplash} alt="Pale Horse" />
      </Link>
    </div>
  )
}

export default Splash