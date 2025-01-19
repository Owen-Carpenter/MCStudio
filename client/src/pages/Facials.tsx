import Navbar from "../components/Navbar";
import "../styles/Facials.css";
import DetailedServiceCard from "../components/DetailedServiceCard";

export function Facials(){
    return(
        <>
            <Navbar />
            <section className="facials-services-container">
                <h1 className="facials-services-title">Facials Offered</h1>
                <div className="card-container">
                    <DetailedServiceCard />
                    <DetailedServiceCard />
                    <DetailedServiceCard />
                    <DetailedServiceCard />
                    <DetailedServiceCard />
                    <DetailedServiceCard />
                    
                </div>
            </section>
        </>
    );
}