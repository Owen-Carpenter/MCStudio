import "../Styles/Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return <>
    <section className="navbar-container">
        <div className="logo-section">
            <a href=""><img src="/assets/mcstudioLogo.png" alt="" className="logo" /></a>
        </div>
        <nav className="navbar">
            <Link className="links" to={"/"}>Home</Link>
            <Link className="links" to={"/Services"}>Services</Link>
            <Link className="links" to={"/"}>Gallery</Link>
            <Link className="links" to={"/About"}>About</Link>
            <Link className="links" to={"/Contact"}>Contact</Link>
            <Link to={"/Account"}>
                <button className="login">Login</button>
            </Link>
            <Link className="links" to={"/Purse"}><img src="/assets/purse.png" alt="" className="purse" /></Link>
            <Link className="links" to={"/Account"}><img src="/assets/woman.png" alt="" className="account" /></Link>
        </nav>
    </section>
  </>;
}

export default Navbar;
