import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";

export function SignUp() {
    return (
        <>
            <Navbar />
            <section className="sign-up-section">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="sign-up-container">
                    <h1>Sign Up</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirm-password" />
                        </div>
                        <button className="sign-up-submit-btn" type="submit">Sign Up</button>
                    </form>
                    <h4>Already have an account?<span><Link to={"/Login"}>Login</Link></span></h4>
                </div>
            </section>
            <Footer />
        </>
    );
}