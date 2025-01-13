import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AboutHero from "../components/AboutHero"
import AboutMission from "../components/AboutMission"
import AboutValues from "../components/AboutValues"
import AboutSocial from "../components/AboutSocial"

export function About(){
    return(
        <>
            <Navbar />
            <AboutHero />
            <AboutMission />
            <AboutValues />
            <AboutSocial />
            <Footer />
        </>
    )
}