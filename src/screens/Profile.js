import React from 'react';

function Profile({ setScreen }) {
  return (
    <div className="page">

      {/* HEADER */}
      <div className="nav">
        <button className="back-btn" onClick={() => setScreen('client')}>← Back</button>
        <div className="nav-logo">Tattoo<span>Spot</span></div>
        <div style={{ width: '60px' }}></div>
      </div>

      {/* PROFILE HERO */}
      <div className="profile-hero">
        <div className="profile-avatar">🎨</div>
        <div className="profile-name">Kenji Mori</div>
        <div className="profile-loc">📍 Brooklyn, NY · Inked Temple Studio</div>
        <div className="profile-stats">
          <div className="profile-stat">
            <div className="profile-stat-val">147</div>
            <div className="profile-stat-lbl">Reviews</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-val">4.9★</div>
            <div className="profile-stat-lbl">Rating</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-val">8yr</div>
            <div className="profile-stat-lbl">Experience</div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="content" style={{ paddingTop: '20px' }}>

        {/* STYLE TAGS */}
        <div style={{ marginBottom: '16px' }}>
          <span className="tag-pill">Japanese</span>
          <span className="tag-pill">Neo-Traditional</span>
          <span className="tag-pill">Irezumi</span>
          <span className="tag-pill">Color Work</span>
        </div>

        {/* ABOUT */}
        <div className="info-card">
          <h3 className="info-card-title">About</h3>
          <p className="info-card-text">
            Specializing in traditional Japanese tattooing with a modern twist.
            I bring mythological creatures, nature motifs, and bold iconography
            to life with precise linework and vibrant color palettes.
          </p>
        </div>

        {/* PORTFOLIO */}
        <h3 className="section-title" style={{ fontSize: '16px', marginBottom: '12px' }}>
          Portfolio
        </h3>
        <div className="portfolio-grid">
          <div className="portfolio-item" style={{ background: '#1a1a2e' }}>🐉</div>
          <div className="portfolio-item" style={{ background: '#0d2818' }}>🌊</div>
          <div className="portfolio-item" style={{ background: '#2d1b00' }}>🦅</div>
          <div className="portfolio-item" style={{ background: '#1a0a2e' }}>🌸</div>
          <div className="portfolio-item" style={{ background: '#0a1a1a' }}>🐯</div>
          <div className="portfolio-item" style={{ background: '#1a1a0a' }}>⛩️</div>
        </div>

        {/* BOOKING DETAILS */}
        <div className="info-card" style={{ marginTop: '16px' }}>
          <div className="booking-row">
            <span className="booking-row-label">Hourly Rate</span>
            <span className="booking-row-val">$180 – $220/hr</span>
          </div>
          <div className="booking-row">
            <span className="booking-row-label">Min. Session</span>
            <span className="booking-row-val">2 hours</span>
          </div>
          <div className="booking-row">
            <span className="booking-row-label">Next Available</span>
            <span className="booking-row-val" style={{ color: '#22c55e' }}>This Friday</span>
          </div>
          <div className="booking-row">
            <span className="booking-row-label">Deposit</span>
            <span className="booking-row-val">$100</span>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="btn-row">
          <button className="btn btn-secondary" onClick={() => setScreen('messages')}>
            💬 Message
          </button>
          <button className="btn btn-primary" onClick={() => setScreen('booking')}>
            📅 Book Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default Profile;