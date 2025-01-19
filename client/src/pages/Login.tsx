import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || { pathname: "/" };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios
          .post("http://localhost:8080/login", { email, password })
          .then((result) => {
            if (result.data.message === "Login successful") {
              localStorage.setItem("isAuthenticated", "true"); // Store login status
              navigate(from, { replace: true });
            } else if (result.data.message === "Incorrect password") {
              alert("Incorrect email or password");
            }
          })
          .catch((err) => console.log(err));
      };
    return(
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
                    <h1>Login</h1>
                    <form  onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="login-submit-btn" type="submit">Login</button>
                    </form>
                    <h4>Don't have an accout?<span><Link to={"/SignUp"}>Sign up</Link></span></h4>
                </div>
            </section>
            <Footer />
        </>
    );
}