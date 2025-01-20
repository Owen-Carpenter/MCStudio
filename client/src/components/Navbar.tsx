import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "../Styles/Navbar.css";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false); // State for dropdown menu
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [cartCount, setCartCount] = useState(0); // State for cart item count

  useEffect(() => {
    // Check login status from localStorage
    const loggedIn = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(loggedIn);

    // Update cart count from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  }, []);

  // Handle services dropdown toggle
  const toggleServices = () => {
    setServicesOpen(!isServicesOpen);
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <>
      <section className={`navbar-container ${isOpen ? "expanded" : ""}`}>
        <div className="top-bar">
          <div className="logo-section">
            <a href="">
              <img src="/assets/mcstudioLogo.png" alt="" className="logo" />
            </a>
          </div>
          <div className="top-bar-menu">
            {!isAuthenticated ? (
              <Link className="login-link" to={"/Login"}>
                <button className="login">Login</button>
              </Link>
            ) : (
              <button className="login-link login" onClick={handleLogout}>
                Logout
              </button>
            )}
            <Link className="links purse-container" to={"/Purse"}>
              <img src="/assets/purse.png" alt="" className="purse" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
            <button className="menu">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
          </div>
        </div>
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <Link className="links" to={"/"}>Home</Link>
          <div
            className={`links services-link ${isServicesOpen ? "open" : ""}`}
            onClick={toggleServices}
          >
            Services
            <div className={`dropdown-menu ${isServicesOpen ? "visible" : ""}`}>
              <Link to={"/Services/Facials"}>Facials</Link>
              <Link to={"/Services/Waxing"}>Waxing</Link>
              <Link to={"/Services/Lashes"}>Lashes</Link>
            </div>
          </div>
          <Link className="links" to={"/Gallery"}>Gallery</Link>
          <Link className="links" to={"/About"}>About</Link>
          <Link className="links" to={"/Contact"}>Contact</Link>
          {!isAuthenticated ? (
            <Link className="login-link" to={"/Login"}>
              <button className="login">Login</button>
            </Link>
          ) : (
            <button className="login-link login" onClick={handleLogout}>
              Logout
            </button>
          )}
          <Link className="links purse-container" to={"/Purse"}>
            <img src="/assets/purse.png" alt="" className="purse" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
