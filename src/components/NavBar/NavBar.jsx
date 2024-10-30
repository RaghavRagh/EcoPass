import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import ProfilePic from "../../assets/avatar.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const magicLineRef = useRef(null);
  const location = useLocation();

  // Scroll handler with requestAnimationFrame for smoother performance
  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle menu toggle for mobile
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Magic line animation on hover or route change
  const moveMagicLine = (element) => {
    const magicLine = magicLineRef.current;
    if (element && magicLine) {
      const { left, width } = element.getBoundingClientRect();
      magicLine.style.left = `${left}px`;
      magicLine.style.width = `${width}px`;
    }
  };

  // Update magic line on route change
  useEffect(() => {
    const activeLink = document.querySelector(".navbar-links .active");
    // Ensure the layout is updated before moving the magic line
    setTimeout(() => moveMagicLine(activeLink), 50);
  }, [location.pathname]);

  // Move magic line on hover
  const handleHover = (e) => {
    moveMagicLine(e.target);
  };

  // Reset magic line when leaving a hover
  const handleMouseLeave = () => {
    const activeLink = document.querySelector(".navbar-links .active");
    moveMagicLine(activeLink);
  };

  // Close the menu when a link is clicked on mobile
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbarr ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img src={logo} className="nav-logo" alt="logo" />
        <NavLink to="/home">EcoPass</NavLink>
      </div>
      <div className="navbar-menu-icon" onClick={handleMenuToggle}>
        {isMenuOpen ? "✖" : "☰"} {/* Toggle between burger and close icon */}
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active" : "")}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={handleLinkClick}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={handleLinkClick}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) => (isActive ? "active" : "")}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={handleLinkClick}
          >
            Search <i className="bi bi-search"></i>
          </NavLink>
        </li>
        
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              onClick={handleLinkClick}
            >
              Dashboard
            </NavLink>
          </li>
       
      </ul>
      <span ref={magicLineRef} className="magic-line"></span>

      <div className="navbar-right">
        {/* Add profile section here */}
        <div className="profile-wrapper">
          <img
            src={ProfilePic} // Placeholder image, replace with actual profile image URL
            alt="Profile"
            className="profile-image"
          />
          <span className="username">Username</span>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
