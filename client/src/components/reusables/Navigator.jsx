import React from "react"
import { Link } from "react-router-dom"
const Navigator = () => {
  return (
    <nav className="navigator">
      <Link to="/">Design Deliver</Link>
      <ul>
        <li>
          <Link to="/all_artists">Find Artists</Link>
        </li>
        <li>
          <Link to="/all_jobs">Find Work</Link>
        </li>
        <li>
          {/* REMEMBER TO UPDATE THIS */}
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/"></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigator
