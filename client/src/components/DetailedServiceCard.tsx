import React, { useState } from 'react';
import '../styles/DetailedServicesCard.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function DetailedServiceCard({ title, desc, price, time, imgURL }: { title: string, desc: string, price: number, time: string, imgURL: string }) {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = () => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (!isAuthenticated) {
            navigate('/login', { state: { from: location } });
            return;
        }


        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const newItem = { title, desc, price, time, imgURL };
        cart.push(newItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
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
                        <button onClick={handleAddToCart} className="atc-btn">
                            <img src="/assets/atc-icon.png" alt="" />
                        </button>
                        <h2>{time}</h2>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="popup">
                    <p>Item added to cart. <Link to="/purse">Proceed to checkout?</Link></p>
                </div>
            )}
        </>
    );
}

export default DetailedServiceCard;