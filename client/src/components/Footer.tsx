import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <>
            <section className="footer-container">
                <div className="info-container">
                    <div className="info-img">
                        <img src="/assets/mcstudioLogo.png" alt="" className="logo" />
                    </div>
                    <Link to={"/Login"}><button className="login-btn">Login</button></Link>
                    <Link to={"/SignUp"}><button className="sign-up-btn">Sign Up</button></Link>
                    <div className="socials-container">
                        <FontAwesomeIcon className='socials-icons' icon={faInstagram}/>
                        <FontAwesomeIcon className='socials-icons' icon={faFacebook}/>
                    </div>
                </div>
                <div className="menu-container">
                    <h1>Menu</h1>
                    <Link className="links" to={"/"}>Home</Link>
                    <Link className="links" to={"/Services"}>Services</Link>
                    <Link className="links" to={"/Gallery"}>Gallery</Link>
                    <Link className="links" to={"/About"}>About</Link>
                    <Link className="links" to={"/Contact"}>Contact</Link>
                </div>
                <div className="service-container">
                    <h1>Services</h1>
                    <Link className="links" to={"/Services"}>Facials</Link>
                    <Link className="links" to={"/Services"}>Waxing</Link>
                    <Link className="links" to={"/Services"}>Facial</Link>
                    <Link className="links" to={"/Services"}>Others</Link>
                </div>
                <div className="connect-container">
                    <h1>Connect</h1>
                    <a 
                        className="links" 
                        href="https://www.google.com/maps/place/278+US-65+suite+c,+Conway,+AR+72032/data=!4m2!3m1!1s0x87d2816c09cfa053:0xda2854b9851be3d5?sa=X&ved=1t:242&ictx=111" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        278 U.S. 65 Suite C, Conway, AR 72032
                    </a>
                    <h2 className='phone'>501-575-7209</h2>
                    <h2 className='email'>mcstudio23@icloud.com</h2>
                </div>
            </section>
        </>
    );
}

export default Footer;