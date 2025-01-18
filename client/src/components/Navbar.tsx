import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";


function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false); // State for dropdown menu

  const toggleServices = () => {
    setServicesOpen(!isServicesOpen);
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
          <Link className="login-link" to={"/Login"}><button className="login">Login</button></Link>
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
          <div
            className={`links services-link ${isServicesOpen ? "open" : ""}`}
            onClick={toggleServices}
          >
            Services
            <div className={`dropdown-menu ${isServicesOpen ? "visible" : ""}`}>
              <Link to={"/Services/Facials"}>Facials</Link>
              <Link to={"/Services/Waxing"}>Waxing</Link>
              <Link to={"/Services/Lashes"}>Lashes</Link>
              <Link to={"/Services/Other"}>Other</Link>
            </div>
          </div>
          <Link className="links" to={"/Gallery"}>Gallery</Link>
          <Link className="links" to={"/About"}>About</Link>
          <Link className="links" to={"/Contact"}>Contact</Link>
          <Link className="login-link" to={"/Login"}><button className="login">Login</button></Link>
          <Link className="links" to={"/Purse"}>
            <img src="/assets/purse.png" alt="" className="purse" />
          </Link>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
