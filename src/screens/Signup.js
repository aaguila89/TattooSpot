import React, { useState } from 'react';

function Signup({ setScreen }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');

  function handleSignup() {
    if (name === '' || email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }
    if (role === 'client') {
      setScreen('client');
    } else {
      setScreen('artist');
    }
  }

  return (
    <div className="auth-page">

      {/* LOGO */}
      <div className="auth-logo">
        Tattoo<span>Spot</span>
      </div>
      <p className="auth-tagline">WHERE ART MEETS SKIN</p>

      {/* CARD */}
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-sub">Join TattooSpot today</p>

        {/* ROLE TOGGLE */}
        <div className="role-toggle">
          <button
            className={`role-toggle-btn ${role === 'client' ? 'active' : ''}`}
            onClick={() => setRole('client')}
          >
            🔍 Client
          </button>
          <button
            className={`role-toggle-btn ${role === 'artist' ? 'active' : ''}`}
            onClick={() => setRole('artist')}
          >
            🎨 Artist
          </button>
        </div>

        {/* FORM */}
        <div className="form-group">
          <label className="form-label">FULL NAME</label>
          <input
            className="form-input"
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">EMAIL</label>
          <input
            className="form-input"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">PASSWORD</label>
          <input
            className="form-input"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="auth-terms">
          By signing up you agree to our{' '}
          <span>Terms of Service</span> and <span>Privacy Policy</span>
        </div>

        <button className="btn btn-primary" onClick={handleSignup}>
          Create Account →
        </button>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <button className="btn btn-google" onClick={handleSignup}>
          <span>🔵</span> Continue with Google
        </button>

        <div className="auth-switch">
          Already have an account?{' '}
          <span onClick={() => setScreen('login')}>Sign In</span>
        </div>

      </div>
    </div>
  );
}

export default Signup;