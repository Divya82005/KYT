import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";
import Company_Logo from "../assets/Company_Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  // Open the download link in a new tab
  const handleDownloadClick = () => {
    window.open("https://app-knowyourtrips.onelink.me/b0PV/rutxsmxs", "_blank");
  };

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <span className="company_logo">
              <img src={Company_Logo} alt="Company Logo" />
            </span>
            Know Your <span className="highlight">Trips</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="btn-primary" onClick={handleDownloadClick}>
          Download the App
        </button>

        {/* Hamburger Menu Button (Mobile only) */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/blogs" onClick={closeMenu}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/privacy" onClick={closeMenu}>
              Privacy
            </Link>
          </li>
        </ul>
        <button
          className="mobile-btn"
          onClick={() => {
            closeMenu();
            handleDownloadClick();
          }}
        >
          Download the App
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Navbar;
