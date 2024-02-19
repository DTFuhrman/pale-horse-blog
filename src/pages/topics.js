import React from "react"
import { Link } from "gatsby"

const TopicsPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <h1>Coming Soon</h1>
    <p>This page is under construction. Check back for updates soon.</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default TopicsPage