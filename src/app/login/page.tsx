"use client";

import React, { useEffect } from "react";
import "./login.css";

const LoginPage = () => {
  useEffect(() => {
    // Add Boxicons CDN
    const link = document.createElement('link');
    link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const container = document.querySelector('.container');
    const registerBtn = document.getElementById('register-btn');
    const loginBtn = document.getElementById('login-btn');

    if (registerBtn && loginBtn && container) {
      registerBtn.addEventListener('click', () => {
        container.classList.add('active');
      });

      loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
      });
    }

    return () => {
      if (registerBtn && loginBtn) {
        registerBtn.removeEventListener('click', () => {});
        loginBtn.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="form-box login">
        <form>
          <h1>Login</h1>
          <p>Welcome back! Please login to your account.</p>
          
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className="bx bxs-envelope"></i>
          </div>
          
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>
          
          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>
          
          <button type="submit" className="btn">Login</button>
          
          <div className="social-icons" style={{marginTop: '20px'}}>
            <a href="#">
              <i className="bx bxl-google"></i>
            </a>
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form>
          <h1>Register</h1>
          <p>Create a new account</p>
          
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className="bx bxs-envelope"></i>
          </div>
          
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>
          
          <button type="submit" className="btn">Register</button>
          
          <div className="social-icons" style={{marginTop: '20px'}}>
            <a href="#">
              <i className="bx bxl-google"></i>
            </a>
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </form>
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button className="btn" id="register-btn">Register</button>
        </div>
        
        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button className="btn" id="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;