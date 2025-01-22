import '../Styles/Hero.css'
import { Link } from 'react-router-dom';

function Hero(){
    return( 
        <>
            <section className="hero-container">
                <img className='hero-img' src="/assets/hero.jpg" alt="" />
                <div className="hero-text">
                    <h1><span className='h1-span'>START YOUR</span> LASH JOURNEY</h1>
                    <h2>From classic to volume, find the perfect style for your unique look</h2>
                    <Link to={"/Services"}><button className='hero-btn'>BOOK APPOINTMENT</button></Link>
                </div>
                <div className="hero-buffer"></div>
            </section>
        </>
    );
}

export default Hero;