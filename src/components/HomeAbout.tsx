import "../styles/HomeAbout.css"

function HomeAbout(){
    return(<>
        <section className="home-about-container">
            <div className="about-img">
                <img src="/public/assets/Location.PNG" alt="" />
            </div>
            <div className="about-content">
                <div className="profile-img">
                    <img src="/public/assets/MakaylaProfilePhoto.jpg" alt="" />
                </div>
                <h2>Welcome To</h2>
                <h1>Makayla's Cosmetic Studio</h1>
                <h4>We're a Conway based esthetician, offering a variety of services including: lashes, brows, waxing, facial, and skin services.</h4>
                <div className="location">
                    <img src="/public/assets/location-pin.png" alt="" className="icon" />
                    <h3>278 U.S. 65 Suite C, Conway, AR 72032</h3>
                </div>
            </div>
        </section>
    </>);
}

export default HomeAbout;