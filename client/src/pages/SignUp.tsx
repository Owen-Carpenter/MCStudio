import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/SignUp.css";

export function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Navbar />
            <section className="login-section">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="login-container">
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirm-password" onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <button className="login-submit-btn" type="submit">Sign Up</button>
                    </form>
                    <h4>Already have an account?<span><Link to={"/Login"}>Login</Link></span></h4>
                </div>
            </section>
            <Footer />
        </>
    );
}