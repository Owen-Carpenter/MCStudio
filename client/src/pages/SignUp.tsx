import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import "../styles/SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!username || !email || !password || !confirmPassword){
            alert("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        axios.post('http://localhost:8080/register', {username, email, password})
        .then(result => {
            console.log(result);
            navigate('/login');
        })
        .catch(err => console.log(err))
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
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
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
                        {error && <p className="error">{error}</p>}
                        {success && <p className="success">{success}</p>}
                        <button className="login-submit-btn" type="submit">Sign Up</button>
                    </form>
                    <h4>Already have an account?<span><Link to={"/Login"}>Login</Link></span></h4>
                </div>
            </section>
            <Footer />
        </>
    );
}