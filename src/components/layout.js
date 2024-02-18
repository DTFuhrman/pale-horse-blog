import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"
import { ThemeContext } from "../context/ThemeContext" // import ThemeContext

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  // use ThemeContext
  const { dark } = React.useContext(ThemeContext)

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className={`global-wrapper ${dark ? "dark" : "light"}`} data-is-root-path={isRootPath}>
      <Navbar />
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout