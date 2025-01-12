import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ServicesHome from "../components/ServicesHome"
import HomeAbout from "../components/HomeAbout"
import HomeGallery from "../components/HomeGallery"
import HomeSchedule from "../components/HomeSchedule"
import HomeReviews from "../components/HomeReviews"
import HomeContact from "../components/HomeContact"

export function Home(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <ServicesHome />
            <HomeAbout />
            <HomeGallery />
            <HomeSchedule />
            <HomeReviews />
            <HomeContact />
        </>
    )
}