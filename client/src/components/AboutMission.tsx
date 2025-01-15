import '../styles/AboutMission.css'

function AboutMission(){
    return(
        <>
            <section className="about-mission">
                <div className="about-mission-img">
                    <img src="/assets/missionImage.png" alt="" />
                </div>
                <div className="about-mission-content">
                    <h1><span className='h1-span'>Our</span>Mission</h1>
                    <p>At Makayla's Cosmetic Studio, we believe every client deserves our quality care and the utmost attention. Our mission is to provide professional esthetician services tailored to the unique needs of each individual, ensuring a rejuvenating and personalized experience.</p>
                </div>
            </section>
        </>
    );
}

export default AboutMission;