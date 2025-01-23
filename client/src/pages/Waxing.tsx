import Navbar from "../components/Navbar";
import "../styles/Facials.css";
import DetailedServiceCard from "../components/DetailedServiceCard";
import Footer from "../components/Footer";
import "../styles/bubbles.css";

export function Waxing(){

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
                <h1 className="facials-services-title">Waxing Offered</h1>
                <div className="card-container">
                    <DetailedServiceCard
                        imgURL="/assets/lip-wax-icon.png"
                        title="Lip Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={10}
                        time="10 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/chin-wax-icon.png"
                        title="Chin Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={15}
                        time="20 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/sideburn-wax-icon.png"
                        title="Sideburn Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={15}
                        time="10 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/nose-wax-icon.png"
                        title="Nose Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={10}
                        time="10 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/back-neck-wax-icon.png"
                        title="Back Neck Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={25}
                        time="20 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/underarm-wax-icon.png"
                        title="Underarm Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={17}
                        time="15 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/half-arm-wax-icon.png"
                        title="Half Arm Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={35}
                        time="25 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/half-arm-wax-icon.png"
                        title="Full Arm Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={50}
                        time="30 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/back-wax-icon.png"
                        title="Half Back Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={25}
                        time="35 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/back-wax-icon.png"
                        title="Full Back Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={50}
                        time="40 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/bikini-wax-icon.png"
                        title="Brazilian Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={55}
                        time="25 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/leg-wax-icon.png"
                        title="Half Leg Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={40}
                        time="35 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/leg-wax-icon.png"
                        title="Full Leg Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={60}
                        time="60 Min"
                    />
                    <DetailedServiceCard
                        imgURL="/assets/bikini-waxing-icon.png"
                        title="Bikini Wax"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price={30}
                        time="20 Min"
                    />
                </div>
            </section>
            <Footer />
        </>
    );
}