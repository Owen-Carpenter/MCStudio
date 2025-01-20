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
    quantity: number;
}


export function Purse() {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(storedCart.map((item: CartItem) => ({ ...item, quantity: item.quantity || 1 })));
    }, []);

    const handleQuantityChange = (index: number, delta: number) => {
        const updatedCart = cart.map((item, i) => {
            if (i === index) {
                const updatedQuantity = item.quantity + delta;
                return { ...item, quantity: Math.max(1, updatedQuantity) }; // Ensure quantity is at least 1
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Persist changes
    };

    const handleRemoveItem = (index: number) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <>
            <Navbar />
            <section className="purse-section">
                <h1>Your Purse</h1>
                <div className="cart-container">
                    <div className="header-container">
                        <h2>Item</h2>
                        <h2>Schedule</h2>
                        <h2>Price</h2>
                        <h2>Quantity</h2>
                        <h2>Total</h2>
                        <h2></h2>
                    </div>
                    {cart.length === 0 ? (
                        <p>Your purse is empty.</p>
                    ) : (
                        cart.map((item, index) => (
                            <div key={index} className="cart-item">
                                <h2>{item.title}</h2>
                                <p>{item.time}</p>
                                <p>${item.price.toFixed(2)}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                                    <p>{item.quantity}</p>
                                    <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                                </div>
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                                <h2></h2>
                                <button onClick={() => handleRemoveItem(index)}>✖</button>
                            </div>
                        ))
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}
