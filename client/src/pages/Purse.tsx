import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Purse.css';

interface CartItem {
    title: string;
    desc: string;
    price: number;
    time: string;
    imgURL: string;
}

function Purse() {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(storedCart);
    }, []);

    const handleRemoveItem = (index: number) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <>
            <Navbar />
            <section className="purse-section">
                <h1>Your Cart</h1>
                <div className="cart-container">
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cart.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.imgURL} alt={item.title} />
                                <div className="cart-item-details">
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                    <p>${item.price}</p>
                                    <p>{item.time}</p>
                                    <button onClick={() => handleRemoveItem(index)}>Remove</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Purse;