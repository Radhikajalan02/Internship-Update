import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="brand">
          React Query Implementation
        </NavLink>

        <nav className="site-nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/trad">FetchOld</NavLink>
            </li>
            <li>
              <NavLink to="/rq">FetchRQ</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header