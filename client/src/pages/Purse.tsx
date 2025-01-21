import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'; 
import dayjs from 'dayjs';
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

    const TAX_RATE = 0.065; 
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = subtotal * TAX_RATE;
    const overall = subtotal + tax;

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
        window.location.reload();
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
                        <h2>Price</h2>
                        <h2>Quantity</h2>
                        <h2>Total</h2>
                    </div>
                    {cart.length === 0 ? (
                        <p>Your purse is empty.</p>
                    ) : (
                        cart.map((item, index) => (
                            <div key={index} className="cart-item">
                                <h2>{item.title}</h2>
                                
                                <p>${item.price.toFixed(2)}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                                    <p>{item.quantity}</p>
                                    <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                                </div>
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                                <button className='cancel' onClick={() => handleRemoveItem(index)}>✖</button>
                            </div>
                        ))
                    )}
                    <div className="bottom-container">
                        <div className="date-time-container">
                            <p>
                                <h2>Schedule</h2>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker label="" className="date-picker" />
                                    <MobileTimePicker className='time-picker' defaultValue={dayjs('2022-04-17T15:30')} />
                                </LocalizationProvider>
                            </p>
                        </div>
                        <div className="price-total-container">
                        <h2>Subtotal:</h2>
                            <p>${subtotal.toFixed(2)}</p>
                            <h2>Tax:</h2>
                            <p>${tax.toFixed(2)}</p>
                            <h2>Total:</h2>
                            <p>${overall.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
