'use client';
import React from 'react';
import Link from 'next/link';
import './landing-page.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="header-container">
          Logo
            <h1 className="brand-name">
              Future Brand name
            </h1>
          <nav className="nav-menu">
            <Link href="#" className="nav-link">About Us</Link>
            <Link href="#" className="nav-link">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <section className="hero-section">
            <h2 className="hero-title">
              Time For A 
              <span className="hero-accent">Pupgrade!</span>
            </h2>
            <p className="hero-subtitle">
              Because every good boy (and girl) deserves to look their best! 🐾
            </p>
          </section>

          <section className="services-grid">
            <Link href="/listings" className="service-card active">
              <div className="service-content">
                <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 4v10.54a4 4 0 1 1-2-3.46V4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2.5"/>
                  <path d="M4 4v10.54a4 4 0 1 0 2-3.46V4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2.5"/>
                </svg>
                <h3 className="service-title">Grooming Time!</h3>
                <p className="service-description">From scruffy to fluffy in no time! Professional pampering for your pooch.</p>
                <p className="service-cta">Book appointment →</p>
              </div>
            </Link>
            
            <div className="service-card disabled">
              <div className="coming-soon">Coming Soon!</div>
              <div className="service-content">
                <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <h3 className="service-title">Training Academy</h3>
                <p className="service-description">Soon your pup can learn new tricks! Stay tuned for tail-wagging classes.</p>
              </div>
            </div>
          </section>

          <section className="featured-section">
            <h3 className="featured-title">
              <span className="title-underline">Top Dog of the Week</span>
            </h3>
            <div className="featured-card">
              <div className="featured-header">
                <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <h4 className="featured-title">Pawsome Grooming</h4>
              </div>
              <p className="featured-subtitle">Where Every Pup Gets the VIP Treatment!</p>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial">
                They made my scruffy buddy look like a million bones! 🐾 - Happy Customer
              </p>
              <button className="book-button">
                <svg className="bone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 3a4 4 0 0 0-4 4 7 7 0 0 0 7 7 7 7 0 0 0 7-7 4 4 0 0 0-4-4 4 4 0 0 0-3 1.4A4 4 0 0 0 8 3z"/>
                  <path d="M16 21a4 4 0 0 0 4-4 7 7 0 0 0-7-7 7 7 0 0 0-7 7 4 4 0 0 0 4 4 4 4 0 0 0 3-1.4A4 4 0 0 0 16 21z"/>
                </svg>
                Book Now
              </button>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-tagline">Every tail we groom has a happy ending! 🐾</p>
          <p className="footer-subtitle">We make your furry friend the talk of the dog park.</p>
        </div>
      </footer>
    </div>
  );
}