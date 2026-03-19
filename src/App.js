import React, { useState, useEffect } from 'react';
import './App.css';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Discover from './screens/Discover';
import Profile from './screens/Profile';
import Booking from './screens/Booking';
import Confirmation from './screens/Confirmation';
import Messages from './screens/Messages';
import Chat from './screens/Chat';
import ArtistDashboard from './screens/ArtistDashboard';
import ArtistPortfolio from './screens/ArtistPortfolio';
import ArtistSetup from './screens/ArtistSetup';
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
  const [screen, setScreen] = useState('splash');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="splash">
        <div className="splash-logo">Tattoo<span>Spot</span></div>
        <p className="splash-tagline">WHERE ART MEETS SKIN</p>
      </div>
    );
  }

  return (
    <div className="app">
      {screen === 'splash' && (
        <div className="splash">
          <div className="splash-logo">
            Tattoo<span>Spot</span>
          </div>
          <p className="splash-tagline">WHERE ART MEETS SKIN</p>
          <div className="splash-divider"></div>
          <p className="splash-desc">
            Find the perfect tattoo artist for your vision — or grow your client base as an artist.
          </p>
          <div className="role-cards">
            <div className="role-card" onClick={() => setScreen('login')}>
              <div className="role-icon">🔍</div>
              <div className="role-label">I'm a Client</div>
              <div className="role-sub">Find my perfect artist</div>
            </div>
            <div className="role-card" onClick={() => setScreen('login')}>
              <div className="role-icon">🎨</div>
              <div className="role-label">I'm an Artist</div>
              <div className="role-sub">Showcase my work</div>
            </div>
          </div>
          <div className="auth-switch" style={{ marginTop: '24px' }}>
            New to TattooSpot?{' '}
            <span
              style={{ color: '#d4a853', cursor: 'pointer' }}
              onClick={() => setScreen('signup')}
            >
              Create Account
            </span>
          </div>
          {user && (
            <div className="auth-switch" style={{ marginTop: '12px' }}>
              <span
                style={{ color: '#8a8580', cursor: 'pointer' }}
                onClick={() => signOut(auth)}
              >
                Sign out
              </span>
            </div>
          )}
        </div>
      )}

      {screen === 'login' && <Login setScreen={setScreen} />}
      {screen === 'signup' && <Signup setScreen={setScreen} />}
      {screen === 'discover' && (
        <Discover
          setScreen={setScreen}
          setSelectedArtist={setSelectedArtist}
        />
      )}
      {screen === 'client' && (
        <Discover
          setScreen={setScreen}
          setSelectedArtist={setSelectedArtist}
        />
      )}
      {screen === 'profile' && (
        <Profile
          setScreen={setScreen}
          artist={selectedArtist}
        />
      )}
      {screen === 'booking' && (
        <Booking
          setScreen={setScreen}
          artistId={selectedArtist?.id}
          artistName={selectedArtist?.name}
        />
      )}
      {screen === 'confirmation' && <Confirmation setScreen={setScreen} />}
      {screen === 'messages' && <Messages setScreen={setScreen} />}
      {screen === 'chat' && <Chat setScreen={setScreen} />}
      {screen === 'dashboard' && <ArtistDashboard setScreen={setScreen} />}
      {screen === 'artist' && <ArtistDashboard setScreen={setScreen} />}
      {screen === 'artistPortfolio' && <ArtistPortfolio setScreen={setScreen} />}
      {screen === 'artistSetup' && <ArtistSetup setScreen={setScreen} />}
    </div>
  );
}

export default App;