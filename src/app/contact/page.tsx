"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="floating-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
          <div className="element element-4"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="hero-badge">
            <span>📞 Get In Touch</span>
          </div>
          <h1 className="contact-title">
            Contact Us
          </h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="contact-grid">
            
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="info-title">Let's Connect</h2>
              <p className="info-subtitle">
                Ready to start your journey with Meta Mart? We're here to help.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4.001 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .45.498z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="method-content">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="method-content">
                    <h3>Email</h3>
                    <p>hello@metamart.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="method-content">
                    <h3>Address</h3>
                    <p>123 Commerce Street<br/>New York, NY 10001</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="method-content">
                    <h3>Hours</h3>
                    <p>Mon - Fri: 9AM - 6PM<br/>Sat - Sun: 10AM - 4PM</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Send Message</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2"/>
                    <polygon points="22,2 15,22 11,13 2,9 22,2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .element {
          position: absolute;
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .element-1 {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .element-2 {
          width: 60px;
          height: 60px;
          top: 20%;
          right: 10%;
          animation-delay: 2s;
        }

        .element-3 {
          width: 80px;
          height: 80px;
          bottom: 30%;
          left: 15%;
          animation-delay: 4s;
        }

        .element-4 {
          width: 120px;
          height: 120px;
          bottom: 10%;
          right: 5%;
          animation-delay: 6s;
        }

        .hero-badge {
          display: inline-block;
          padding: 10px 24px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 50px;
          margin-bottom: 24px;
          animation: pulse 2s infinite;
        }

        .hero-badge span {
          font-size: 14px;
          font-weight: 600;
          color: #3b82f6;
        }

        .contact-title {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 900;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
          animation: slideUp 0.8s ease-out;
        }

        .contact-subtitle {
          font-size: 1.25rem;
          color: #64748b;
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          animation: slideUp 0.8s ease-out 0.2s both;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .contact-info {
          animation: slideUp 0.8s ease-out 0.4s both;
        }

        .info-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .info-subtitle {
          font-size: 1.125rem;
          color: #64748b;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 48px;
        }

        .contact-method {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 24px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.1);
          transition: all 0.3s ease;
        }

        .contact-method:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.15);
        }

        .method-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .method-content h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 4px;
        }

        .method-content p {
          color: #64748b;
          line-height: 1.5;
        }

        .social-links h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .social-icons {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 20px;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }

        .contact-form-container {
          animation: slideUp 0.8s ease-out 0.6s both;
        }

        .contact-form {
          background: white;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.1);
        }

        .form-title {
          font-size: 2rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 32px;
          text-align: center;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 16px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 16px;
          color: #000000;
          transition: all 0.3s ease;
          background: #f9fafb;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3b82f6;
          background: white;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 18px 32px;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .contact-form {
            padding: 24px;
          }
          
          .contact-method {
            padding: 20px;
          }
          
          .method-icon {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;