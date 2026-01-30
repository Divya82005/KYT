import { useState } from "react";
import { useLocation } from "react-router-dom";
import Company_Logo from "../assets/logo.svg";
import "./Styles/Navbar.css";
import ReactGA from "react-ga4";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    closeMenu();

    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      window.location.href = "/#" + sectionId;
      return;
    }

    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Check if a link is active based on current location and scroll position
  const isActive = (sectionId) => {
    return location.pathname === "/" && window.location.hash === "#" + sectionId;
  };

  
  const handleDownloadClick = () => {
  ReactGA.event("download_btn"); // no need to send page manually

  window.open(
    "https://app-knowyourtrips.onelink.me/b0PV/rutxsmxs",
    "_blank"
  );
};



  return (
    <>
      <nav className="nav">
        <div className="logo-wrapper">
          <img
            src={Company_Logo}
            alt="Company Logo"
            className="company_logo"
          />
          <a
            href="/"
            className="logo-link"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                window.location.href = "/";
              }
              closeMenu();
            }}
          >
            <span className="logo-text-mobile">Know Your <span className="highlight">Trips</span></span>
            <span className="logo-text-desktop">KnowYour <span className="highlight">Trips</span></span>
          </a>
        </div>

        <ul className="nav-links">
          <li>
            <a
              href="/blogs"
              className={location.pathname === "/blogs" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/blogs";
                closeMenu();
              }}
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={isActive("about") ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/contact";
                closeMenu();
              }}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/privacy"
              className={location.pathname === "/privacy" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/privacy";
                closeMenu();
              }}
            >
              Privacy
            </a>
          </li>
        </ul>

        <button className="btn-primary" onClick={handleDownloadClick}>
          <span className="diamond-top-left">✦</span>
          <span className="diamond-bottom-right">✦</span>
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
            <a
              href="/blogs"
              className={location.pathname === "/blogs" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/blogs";
              }}
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={isActive("about") ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/contact";
              }}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/privacy"
              className={location.pathname === "/privacy" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/privacy";
              }}
            >
              Privacy
            </a>
          </li>
        </ul>

        <button
          className="mobile-btn"
          onClick={() => {
            closeMenu();
            handleDownloadClick();
          }}
        >
          <span className="diamond-top-left">✦</span>
          <span className="diamond-bottom-right">✦</span>
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