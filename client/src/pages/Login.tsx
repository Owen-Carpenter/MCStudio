import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Login.css";

export function Login(){
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
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" />
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