import Navbar from "../components/Navbar";
import "../styles/Facials.css";
import DetailedServiceCard from "../components/DetailedServiceCard";
import Footer from "../components/Footer";

export function Lashes(){
    return(
        <>
            <Navbar />
            <section className="facials-services-container">
                <h1 className="facials-services-title">Lashes Offered</h1>
                <div className="card-container">
                    <DetailedServiceCard
                        imgURL="/assets/lift-and-tint-icon.png"
                        title="Lash Lift & Tint"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={70}
                        time="45 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/classic-lashes-icon.png"
                        title="Classic Eyelash Extensions"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={90}
                        time="150 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/hybrid-wispy-icon.png"
                        title="Angel/Wet Eyelash Extensions"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={105}
                        time="150 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/hybrid-lashes-icon.png"
                        title="Hybrid Eyelash Extensions"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={115}
                        time="150 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/Hybrid-Wispy-lashes-icon.png"
                        title="Hybrid Wispy Eyelash Extensions"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={125}
                        time="165 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/volume-lashes-icon.png"
                        title="Volume Eyelash Extensions"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={130}
                        time="160 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/wispy-volume-lashes-icon.png"
                        title="Wispy Volume Eyelash Extensions"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={140}
                        time="45 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/lash-removal-icon.png"
                        title="Lash Removal"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={17}
                        time="20 Min"
                    />
                </div>
            </section>
            <Footer />
        </>
    );
}