import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import dayjs from 'dayjs';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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
    const [age, setAge] = useState('');
    
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
                return { ...item, quantity: Math.max(1, updatedQuantity) };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleRemoveItem = (index: number) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleSelectChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
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
                                <button className="cancel" onClick={() => handleRemoveItem(index)}>✖</button>
                            </div>
                        ))
                    )}
                    <div className="bottom-container">
                        <div className="date-time-container">
                            <p>
                                <h2>Schedule</h2>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker label="" className="date-picker" />
                                    <MobileTimePicker className="time-picker" defaultValue={dayjs('2022-04-17T15:30')} />
                                </LocalizationProvider>
                                <Box className="service-type-container" sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Fill</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleSelectChange}
                                        >
                                            <MenuItem value={0}>No Fill</MenuItem>
                                            <MenuItem value={2}>2 Week Fill</MenuItem>
                                            <MenuItem value={3}>3 Week Fill</MenuItem>
                                            <MenuItem value={4}>4 Week Fill</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
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
