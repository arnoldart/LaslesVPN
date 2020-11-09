import React from 'react'
import './Navbar.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './images/Logo.svg'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <Logo />
        </Link>
        <ul className="nav-item">
          <li className="nav-link">About</li>
          <li className="nav-link">Features</li>
          <li className="nav-link">Pricing</li>
          <li className="nav-link">Testimonial</li>
          <li className="nav-link">Help</li>
        </ul>
        <ul>
          <li className="btn-link">
            <Button>
              <h1>Sign In</h1> 
            </Button>
            <Button buttonStyle="btn--outline" buttonBorder="border--large" buttonColor="red">
              <h1>Sign Up</h1>
            </Button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
