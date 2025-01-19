import React from 'react';
import '../styles/DetailedServicesCard.css'
import { Link } from 'react-router-dom';

function DetailedServiceCard() {

    const handleAddToCart = () => {
    
    }

  return (
    <>
      <div className="detailed-card">
        <div className="detailed-card-img">
            <img src="/assets/class-icon.png" alt="" />
        </div>
        <div className="detailed-card-content">
            <div className="detailed-card-text">
                <h1>Lash Lift & Tint</h1>
                <p>With a lash lift and tint, you can say goodbye to  curling lashes and wearing mascara. This treatment lasts 4-6 weeks depending on aftercare and lifestyle.</p>
            </div>
            <div className="detailed-card-price">
                <h2>$70</h2>
                <button className="atc"><Link to={'/purse'}></Link></button>
            </div>
        </div>
      </div>
    </>
  );
}

export default DetailedServiceCard;
