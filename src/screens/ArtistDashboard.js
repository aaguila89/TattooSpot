import React, { useState } from 'react';

const initialRequests = [
  {
    id: 1,
    name: 'Alex Chen',
    avatar: '👤',
    style: 'Japanese · Full Sleeve · ~$1,800',
    desc: "Looking for a full dragon sleeve in your Irezumi style. Reference: Hokusai-inspired waves with red dragon. Flexible on schedule.",
    time: '2h ago',
    status: 'pending',
  },
  {
    id: 2,
    name: 'Jamie Torres',
    avatar: '👤',
    style: 'Neo-Traditional · Back Piece · ~$2,400',
    desc: "Huge fan of your work. Want a phoenix back piece for my 30th birthday. Would love to have a consult first.",
    time: '5h ago',
    status: 'pending',
  },
  {
    id: 3,
    name: 'Riley Kim',
    avatar: '👤',
    style: 'Japanese · Chest Piece · ~$900',
    desc: "Looking for a koi fish chest piece. Love your use of color and water elements.",
    time: '1d ago',
    status: 'pending',
  },
];

function ArtistDashboard({ setScreen }) {
  const [requests, setRequests] = useState(initialRequests);

  function handleAccept(id) {
    setRequests(requests.map(r =>
      r.id === id ? { ...r, status: 'accepted' } : r
    ));
  }

  function handleDecline(id) {
    setRequests(requests.map(r =>
      r.id === id ? { ...r, status: 'declined' } : r
    ));
  }

  const pending = requests.filter(r => r.status === 'pending').length;

  return (
    <div className="page">

      {/* DASHBOARD HEADER */}
      <div className="dash-header">
        <div className="dash-greeting">Welcome back</div>
        <div className="dash-name">Kenji Mori 🎨</div>
        <div className="dash-stats">
          <div className="dash-stat">
            <div className="dash-stat-val">{pending}</div>
            <div className="dash-stat-lbl">New Requests</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-val">4</div>
            <div className="dash-stat-lbl">This Week</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-val">$3.2k</div>
            <div className="dash-stat-lbl">Earned</div>
          </div>
        </div>
      </div>

      <div className="content" style={{ paddingTop: '20px' }}>

        <div className="section-header">
          <h2 className="page-title" style={{ fontSize: '20px' }}>
            Booking Requests
          </h2>
          <p className="page-sub">{pending} pending requests</p>
        </div>

        {requests.map(request => (
          <div className="request-card" key={request.id}>
            <div className="request-top">
              <div className="request-avatar">{request.avatar}</div>
              <div className="request-info">
                <div className="request-name">{request.name}</div>
                <div className="request-style">{request.style}</div>
              </div>
              <div className="request-time">{request.time}</div>
            </div>
            <div className="request-desc">{request.desc}</div>

            {request.status === 'pending' && (
              <div className="request-actions">
                <button
                  className="req-btn req-btn-accept"
                  onClick={() => handleAccept(request.id)}
                >
                  ✓ Accept
                </button>
                <button
                  className="req-btn req-btn-decline"
                  onClick={() => handleDecline(request.id)}
                >
                  ✗ Decline
                </button>
              </div>
            )}

            {request.status === 'accepted' && (
              <div className="request-status accepted">
                ✓ Accepted — Client has been notified
              </div>
            )}

            {request.status === 'declined' && (
              <div className="request-status declined">
                ✗ Declined
              </div>
            )}
          </div>
        ))}

      </div>

      {/* TAB BAR */}
      <div className="tab-bar">
        <button className="tab-item active">
          <span className="tab-icon">🏠</span>
          <span className="tab-label">Dashboard</span>
        </button>
        <button className="tab-item" onClick={() => setScreen('artistPortfolio')}>
          <span className="tab-icon">🖼️</span>
          <span className="tab-label">Portfolio</span>
        </button>
        <button className="tab-item" onClick={() => setScreen('messages')}>
          <span className="tab-icon">💬</span>
          <span className="tab-label">Messages</span>
        </button>
        <button className="tab-item">
          <span className="tab-icon">📅</span>
          <span className="tab-label">Schedule</span>
        </button>
      </div>

    </div>
  );
}

export default ArtistDashboard;