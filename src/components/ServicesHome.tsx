import "../styles/ServicesHome.css"
import ServiceCard from "./ServiceCard";

function ServicesHome(){
    return(<>
        <section className="services-container">
            <ServiceCard 
                title="Lash & Lift"
                one="Lifts and curls natural lashes"
                two="Adds semi-permanent color"
                three="Creates a fuller, mascara-free look"
                imageURL=""
            />
            <ServiceCard 
                title=""
                one="Lifts and curls natural lashes"
                two="Adds semi-permanent color"
                three="Creates a fuller, mascara-free look"
                imageURL=""
            />
            <ServiceCard 
                title="Lash & Lift"
                one="Lifts and curls natural lashes"
                two="Adds semi-permanent color"
                three="Creates a fuller, mascara-free look"
                imageURL=""
            />
            <ServiceCard 
                title="Lash & Lift"
                one="Lifts and curls natural lashes"
                two="Adds semi-permanent color"
                three="Creates a fuller, mascara-free look"
                imageURL=""
            />
            <ServiceCard 
                title="Lash & Lift"
                one="Lifts and curls natural lashes"
                two="Adds semi-permanent color"
                three="Creates a fuller, mascara-free look"
                imageURL=""
            />
        </section>
    </>);
}

export default ServicesHome;