import React, { useState } from 'react';

function Login({ setScreen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');

  function handleLogin() {
    if (email === '' || password === '') {
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
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-sub">Sign in to your account</p>

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
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="auth-forgot" onClick={() => alert('Password reset coming soon!')}>
          Forgot password?
        </div>

        <button className="btn btn-primary" onClick={handleLogin}>
          Sign In →
        </button>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <button className="btn btn-google" onClick={handleLogin}>
          <span>🔵</span> Continue with Google
        </button>

        <div className="auth-switch">
          Don't have an account?{' '}
          <span onClick={() => setScreen('signup')}>Sign Up</span>
        </div>

      </div>
    </div>
  );
}

export default Login;