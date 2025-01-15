import Navbar from "../components/Navbar"
import ContactHero from "../components/ContactHero"
import Footer from "../components/Footer"
import ContactInput from "../components/ContactInput"

export function Contact(){
    return(
        <>
            <Navbar />
            <ContactHero />
            <ContactInput />
            <Footer />
        </>
    )
}