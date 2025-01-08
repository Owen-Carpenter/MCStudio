import "../Styles/Navbar.css"
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react'
import { useState } from "react";

function Navbar() {

  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <section className={`navbar-container ${isOpen ? "expanded" : ""}`}>
        <div className="top-bar">
          <div className="logo-section">
            <a href="">
              <img src="/public/assets/mcstudioLogo.png" alt="" className="logo" />
            </a>
          </div>
          <div className="top-bar-menu">
            <Link to={"/Account"}>
              <button className="login">Login</button>
            </Link>
            <Link className="links" to={"/Purse"}>
              <img src="/assets/purse.png" alt="" className="purse" />
            </Link>
            <button className="menu">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
          </div>
        </div>
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <Link className="links" to={"/"}>Home</Link>
          <Link className="links" to={"/Services"}>Services</Link>
          <Link className="links" to={"/Gallery"}>Gallery</Link>
          <Link className="links" to={"/About"}>About</Link>
          <Link className="links" to={"/Contact"}>Contact</Link>
          <Link to={"/Account"}>
            <button className="login">Login</button>
          </Link>
          <Link className="links" to={"/Purse"}>
            <img src="/assets/purse.png" alt="" className="purse" />
          </Link>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
