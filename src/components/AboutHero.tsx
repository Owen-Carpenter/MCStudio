function AboutHero(){
    return( 
        <>
            <section className="hero-container">
                <img className='hero-img' src="/public/assets/aboutHero.jpg" alt="" />
                <div className="hero-text">
                    <h1><span className='h1-span'>Nice to</span> meet you!</h1>
                    <h2>Located on the outskirts of Conway, Arkansas, Makayla’s Cosmetic Studio is your premier destination for exceptional esthetician services.</h2>
                    <button className='hero-btn'>BOOK APPOINTMENT</button>
                </div>
                <div className="hero-buffer"></div>
            </section>
        </>
    );
}

export default AboutHero;