import Navbar from "../components/Navbar"
import "../styles/Services.css"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

export function Services(){

    const spans = Array.from({ length: 15 }, (_, i) => (
        <span key={i} style={{ "--i": Math.floor(Math.random() * 15) + 1 } as React.CSSProperties}></span>
    ));

    return (
        <>
            <Navbar />
            <section className="facials-services-container">
                <div className="bubbles">
                    {spans}
                    {spans}
                    {spans}
                </div>
                <h1 className="facials-services-title">Services Offered</h1>
                <div className="services-cards-container">
                    <div className="services-card">
                        <h2>Eyelash Extensions</h2>
                        <p>
                            Enhance your natural beauty with our premium eyelash extensions. 
                            From subtle and elegant to bold and dramatic, we offer a range of styles 
                            to give you the perfect look for any occasion.
                        </p>
                        <Link to={"/Services/Lashes"}>
                            <button className="link-service-btn">
                                View Lashes
                            </button>
                        </Link>
                    </div>  
                    <div className="services-card">
                        <h2>Body Waxing</h2>
                        <p>
                            Discover smooth, flawless skin with our professional body waxing services. 
                            We offer a gentle and effective waxing experience tailored to your needs, 
                            leaving your skin feeling silky and radiant.
                        </p>
                        <Link to={"/Services/Waxing"}>
                            <button className="link-service-btn">
                                View Waxing
                            </button>
                        </Link>
                    </div>
                    <div className="services-card">
                        <h2>Facial</h2>
                        <p>
                            Refresh and rejuvenate your skin with our customized facial treatments. 
                            Whether you’re looking to hydrate, brighten, or address specific skin concerns, 
                            our expert care will leave your face glowing and healthy.
                        </p>
                        <Link to={"/Services/Facials"}>
                            <button className="link-service-btn">
                                View Facials
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}