import React, { useState } from 'react';
import '../styles/LoginPopup.css';

const LoginPopup: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // State for error message

  const closePopup = () => setPopupOpen(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSignUp) {
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Sign Up:', { email, password });
      // Handle sign-up logic here (POST to backend)
    } else {
      // Handle login logic
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Login successful:', data.message);
          closePopup();
        } else {
          setError(data.message); // Display error message if login fails
        }
      } catch (err) {
        console.error('Error during login:', err);
        setError('Error during login.');
      }
    }
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
            {error && <div className="error-message">{error}</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
