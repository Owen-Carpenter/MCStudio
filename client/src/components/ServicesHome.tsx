import "../styles/ServicesHome.css"
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import DetailedServiceCard from "./DetailedServiceCard";

function ServicesHome(){
    return(<>
        <section className="home-page-services services-container">
            <div className="services-text-container">
                <h1>Best Selling Services</h1>
            </div>
            <div className="card-container">
                    <DetailedServiceCard
                        imgURL="/assets/classic-lashes-icon.png"
                        title="Classic Eyelash Extensions"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={90}
                        time="150 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/brow-tint-wax-icon.png"
                        title="Brow Tint & Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={37}
                        time="45 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/volume-lashes-icon.png"
                        title="Volume Eyelash Extensions"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={130}
                        time="160 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/lip-wax-icon.png"
                        title="Lip Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={10}
                        time="10 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/procell-icon.png"
                        title="Procell Therapies Treatment"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={350}
                        time="45 Min"
                    />
            </div>
            <Link className="services-link" to={"/Services"}>
                <button className="services-btn">
                    View More
                </button>
            </Link>
        </section>
    </>);
}

export default ServicesHome;