import React, { useContext } from "react"
import { Link } from "gatsby"
import darkSplash from "../images/darkSplash.png"
import lightSplash from "../images/lightSplash.png"
import { ThemeContext } from "../context/ThemeContext"

const Splash = () => {
  const { dark } = useContext(ThemeContext)

  return (
    <div className="splash">
      <div>
        <h1 className="main-heading">
          pale
        </h1>
      </div>
      <div>
        <Link className="frontImage" to="/">
          <img className="splash-image" src={dark ? darkSplash : lightSplash} alt="Pale Horse" />
        </Link>
      </div>
      <div>
        <h1 className="main-heading">
          horse
        </h1>
      </div>
    </div>
  )
}

export default Splash