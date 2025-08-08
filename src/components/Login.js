import React, { useState } from 'react';
import Header from './Header';
import '../App.css';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !password) {
      setMessage({ text: '⚠️ Please fill all fields.', type: 'error' });
      return;
    }

    if (!validateEmail(email)) {
      setMessage({ text: '⚠️ Please enter a valid email address.', type: 'error' });
      return;
    }

    if (password.length < 6) {
      setMessage({ text: '⚠️ Password must be at least 6 characters.', type: 'error' });
      return;
    }

    // API call to backend
    try {
      const response = await axios.post('http://localhost:5000/users', {
        name,
        email,
        password,
        age: 0 // Optional
      });

      setMessage({ text: '✅ Registration successful!', type: 'success' });

      // Reset form
      setName('');
      setEmail('');
      setPassword('');

      // Navigate to contact page after delay
      setTimeout(() => {
        navigate('/contact');
      }, 1000);

    } catch (error) {
      console.error('API Error:', error.response?.data || error.message);
      setMessage({ text: '❌ Failed to register. Please try again.', type: 'error' });
    }
  };

  return (
    <>
      <Header />
      <div className="login-container" style={{ marginTop: '90px' }}>
        <div className="login-box">
          <h2>EXAMBUDDY</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Email address</label>
              <input
                type="text"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />{' '}
                Show Password
              </small>
            </div>
            <button type="submit" className="login-btn">Register</button>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            {message && (
              <p
                style={{
                  marginTop: '10px',
                  color: message.type === 'success' ? 'limegreen' : 'red',
                  fontWeight: '500',
                }}
              >
                {message.text}
              </p>
            )}
          </form>
          <div className="social-login">
            <button className="social-btn google">
              <FaGoogle style={{ marginRight: '8px' }} />
              Login with Google
            </button>
            <button className="social-btn facebook">
              <FaFacebookF style={{ marginRight: '8px' }} />
              Login with Facebook
            </button>
          </div>
          <div className="create-account">
            <p>New Here? <a href="#">Create Account</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
