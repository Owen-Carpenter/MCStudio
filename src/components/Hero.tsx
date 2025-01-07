import '../Styles/Hero.css'

function Hero(){
    return <>
        <section className="hero-container">
            <img className='hero-img' src="/public/assets/hero.jpg" alt="" />
            <div className="hero-text">
                <h1><span className='h1-span'>START YOUR</span> LASH JOURNEY</h1>
                <h2>From classic to volume, find the perfect style for your unique look</h2>
                <button className='hero-btn'>BOOK APPOINTMENT</button>
            </div>
            <div className="hero-buffer"></div>
        </section>
    </>;
}

export default Hero;