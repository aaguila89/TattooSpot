import React, { useState } from 'react';
import { auth } from '../firebase';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

function Login({ setScreen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (email === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (role === 'client') {
        setScreen('client');
      } else {
        setScreen('artist');
      }
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    }
    setLoading(false);
  }

  async function handleGoogleLogin() {
    setLoading(true);
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      if (role === 'client') {
        setScreen('client');
      } else {
        setScreen('artist');
      }
    } catch (err) {
      setError('Google sign in failed. Please try again.');
    }
    setLoading(false);
  }

  return (
    <div className="auth-page">

      <div className="auth-logo">
        Tattoo<span>Spot</span>
      </div>
      <p className="auth-tagline">WHERE ART MEETS SKIN</p>

      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-sub">Sign in to your account</p>

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

        {error !== '' && (
          <div className="auth-error">{error}</div>
        )}

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

        <div className="auth-forgot">
          Forgot password?
        </div>

        <button
          className="btn btn-primary"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign In →'}
        </button>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <button
          className="btn btn-google"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
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