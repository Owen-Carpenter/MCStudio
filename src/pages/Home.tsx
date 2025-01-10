import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ServicesHome from "../components/ServicesHome"
import HomeAbout from "../components/HomeAbout"

export function Home(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <ServicesHome />
            <HomeAbout />
        </>
    )
}