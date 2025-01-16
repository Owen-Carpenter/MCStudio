import React, { useState } from 'react';
import '../styles/LoginPopup.css';

const LoginPopup: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Login and Sign-up
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password (only for sign-up)

  const closePopup = () => setPopupOpen(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Sign Up:', { email, password });
    } else {
      console.log('Login:', { email, password });
    }
    closePopup();
  };

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
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Show confirm password input only for sign up */}
              {isSignUp && (
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    required
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
