import Navbar from "../components/Navbar";
import "../styles/Facials.css";
import DetailedServiceCard from "../components/DetailedServiceCard";
import Footer from "../components/Footer";
import "../styles/bubbles.css";

export function Facials(){
    const spans = Array.from({ length: 15 }, (_, i) => (
        <span key={i} style={{ "--i": Math.floor(Math.random() * 15) + 1 } as React.CSSProperties}></span>
    ));

    return(
        <>
            <Navbar />
            <section className="facials-services-container">
                <div className="bubbles">
                    {spans}
                    {spans}
                    {spans}
                </div>
                <h1 className="facials-services-title">Facials Offered</h1>
                <div className="card-container">
                    <DetailedServiceCard
                        imgURL="/assets/dermaplane-icon.png"
                        title="Mini Dermaplane Facial"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={40}
                        time="40 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/aha-icon.png"
                        title="AHA Chemical Peel"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={60}
                        time="45 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/procell-icon.png"
                        title="Procell Therapies Treatment"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={350}
                        time="45 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/brow-lamination-icon.png"
                        title="Brow Lamination"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={75}
                        time="60 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/brow-tint-wax-icon.png"
                        title="Brow Tint & Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={37}
                        time="45 Min"
                    />
                </div>
            </section>
            <Footer />
        </>
    );
}