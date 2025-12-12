import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";
import Company_Logo from "../assets/Company_Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleDownloadClick = () => {
    window.open("https://app-knowyourtrips.onelink.me/b0PV/rutxsmxs", "_blank");
  };

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img
              src={Company_Logo}
              alt="Company Logo"
              className="company_logo"
            />
            Know Your <span className="highlight">Trips</span>
          </Link>
        </div>

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

        <button className="btn-primary" onClick={handleDownloadClick}>
          Download the App
        </button>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
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
