import React, { useState } from 'react';
import '../styles/LoginPopup.css';

const LoginPopup: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Login and Sign-up

  const closePopup = () => setPopupOpen(false);

  return (
    <>
      <button className="login-button" onClick={() => setPopupOpen(true)}>
        Login
      </button>
      
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
          >
            <button className="close-button" onClick={closePopup}>
              ✕
            </button>
            <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>

              {/* Show confirm password input only for sign up */}
              {isSignUp && (
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="Confirm your password"
                  />
                </div>
              )}

              <button type="submit" className="submit-button">
                {isSignUp ? 'Sign Up' : 'Login'}
              </button>

              <div className="switch-form">
                {isSignUp ? (
                  <p>
                    Already have an account?{' '}
                    <span onClick={() => setIsSignUp(false)} className="switch-link">
                      Log in
                    </span>
                  </p>
                ) : (
                  <p>
                    Don't have an account?{' '}
                    <span onClick={() => setIsSignUp(true)} className="switch-link">
                      Sign up here
                    </span>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
