import "../styles/ServicesHome.css"
import ServiceCard from "./ServiceCard";

function ServicesHome(){
    return(<>
        <section className="services-container">
            <div className="services-text-container">
                <h1>Best Selling Services</h1>
            </div>
            <div className="card-container">
                <ServiceCard 
                    title="Lift & Tint"
                    one="Lifts and curls natural lashes for a natural, effortless look"
                    two="Adds semi-permanent color for darker, more defined lashes"
                    three="Creates a fuller, mascara-free look with long-lasting results"
                    imageURL="/assets/lift-tint-icon.png"
                />
                <ServiceCard 
                    title="Classic Lashes"
                    one="Enhances natural lashes with a subtle lift and curl"
                    two="Provides a semi-permanent darkening effect for a natural look"
                    three="Achieves a fuller, elegant look without mascara"
                    imageURL="/assets/classic-icon.PNG"
                />
                <ServiceCard 
                    title="Angel/Wet Lashes"
                    one="Softly lifts and curls lashes for a dreamy, open-eye effect"
                    two="Adds semi-permanent color for a delicate yet defined appearance"
                    three="Creates a fluttery, fuller look without the need for mascara"
                    imageURL="/assets/angel-wet-icon.png"
                />
                <ServiceCard 
                    title="Hybrid Lashes"
                    one="Combines classic and volume lashes for a textured, lifted look"
                    two="Adds semi-permanent color for depth and definition"
                    three="Creates a fuller, voluminous look without clumping or heaviness"
                    imageURL="/assets/hybrid-icon.png"
                />
                <ServiceCard 
                    title="Volume Lashes"
                    one="Adds multiple extensions to each lash for an intense, voluminous effect"
                    two="Darkens lashes with semi-permanent color for dramatic definition"
                    three="Creates a bold, fuller look without the need for mascara"
                    imageURL="/assets/volume-icon.png"
                />
                <ServiceCard 
                    title="Wispy Volume"
                    one="Blends volume and texture for a unique, feathery lash effect"
                    two="Darkens lashes with semi-permanent color for bold definition"
                    three="Creates a fuller, wispy look that enhances eye shape beautifully"
                    imageURL="/assets/wispy-volume-icon.png"
                />
            </div>
            <button className="services-btn">
                View More
            </button>
        </section>
    </>);
}

export default ServicesHome;