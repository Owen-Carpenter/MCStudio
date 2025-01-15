
import '../styles/AboutValues.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faHandHoldingHeart, faHandshake } from '@fortawesome/free-solid-svg-icons';


function AboutValues(){
    return(
        <>
            <section className="about-values">
                <div className="about-values-content">
                    <h1><span className='h1-span'>Our</span>Values</h1>
                    <div className="about-values-card">
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <div className="card-text">
                            <h2>Experienced Staff</h2>
                            <p>Our team of skilled and licensed estheticians is dedicated to bringing out your natural beauty through expert techniques and personalized care.</p>
                        </div>
                    </div>
                    <div className="about-values-card">
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faUsers}/>
                        </div>
                        <div className="card-text">
                            <h2>Community Focused</h2>
                            <p>We believe in the power of community. As a proud part of Conway, Arkansas, we are dedicated to fostering connections and building lasting relationships with our clients and neighbors.</p>
                        </div>
                    </div>
                    <div className="about-values-card">
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faHandHoldingHeart}/>
                        </div>
                        <div className="card-text">
                            <h2>Personalized Care</h2>
                            <p>We understand that every client is unique, and so are their beauty goals. That’s why we take the time to get to know you, your skin, and your preferences.</p>
                        </div>
                    </div>
                    <div className="about-values-card">
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faHandshake}/>
                        </div>
                        <div className="card-text">
                            <h2>Affordable Pricing</h2>
                            <p>We believe that beauty and self-care should be accessible to everyone. That’s why we offer high-quality services at competitive prices, ensuring you get exceptional value without compromising on quality.</p>
                        </div>
                    </div>
                </div>
                <div className="about-values-img">
                    <img src="/assets/happyClient.webp" alt="" />
                </div>
            </section>
        </>
    );
}

export default AboutValues;