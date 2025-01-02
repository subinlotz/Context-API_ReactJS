import React from 'react'
import './Header.css'
import { Link } from 'react-router'
function Header() {
  return (
      <div className="header">
        <p id="logo">Logo</p>
        <div className="nav">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Header
