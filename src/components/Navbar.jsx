import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          GLOBE PRINTERS
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/services" className="nav-item">
            Services
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
          <Link to="/contact" className="nav-item">
            Contact us
          </Link>
          <Link to="/signup" className="nav-button">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar