import React from "react"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../../context/context"
const Navigator = () => {
  const { isLoggedIn } = useGlobalContext()

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
        {!isLoggedIn && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigator
