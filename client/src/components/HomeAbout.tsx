import "../styles/HomeAbout.css"

function HomeAbout(){
    return(<>
        <section className="home-about-container">
            <div className="about-img">
                <img src="/assets/Location.PNG" alt="" />
            </div>
            <div className="about-content">
                <div className="profile-img">
                    <img src="/assets/MakaylaProfilePhoto.jpg" alt="" />
                </div>
                <h2>Welcome To</h2>
                <h1>Makayla's Cosmetic Studio</h1>
                <h4>We're a Conway based esthetician, offering a variety of services including: lashes, brows, waxing, facial, and skin services.</h4>
                <div className="location">
                    <img src="/assets/location-pin.png" alt="" className="icon" />
                    <a 
                        className="links" 
                        href="https://www.google.com/maps/place/278+US-65+suite+c,+Conway,+AR+72032/data=!4m2!3m1!1s0x87d2816c09cfa053:0xda2854b9851be3d5?sa=X&ved=1t:242&ictx=111" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        278 U.S. 65 Suite C, Conway, AR 72032
                    </a>
                </div>
            </div>
        </section>
    </>);
}

export default HomeAbout;