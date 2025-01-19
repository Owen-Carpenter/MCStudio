import React from 'react';
import '../styles/DetailedServicesCard.css';
import { Link } from 'react-router-dom';

function DetailedServiceCard({title, desc, price, time, imgURL}: {title: string, desc: string, price: number, time: string, imgURL : string}) {

    const handleAddToCart = () => {

    }

  return (
    <>
      <div className="detailed-card">
        <div className="detailed-card-img">
            <img src={imgURL} alt="" />
        </div>
        <div className="detailed-card-content">
            <div className="detailed-card-text">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <div className="detailed-card-price">
                <h2>${price}</h2>
                <Link to={'/purse'}><button className="atc-btn"><img src="/assets/atc-icon.png" alt="" /></button></Link>
                <h2>{time}</h2>
            </div>
        </div>
      </div>
    </>
  );
}

export default DetailedServiceCard;
