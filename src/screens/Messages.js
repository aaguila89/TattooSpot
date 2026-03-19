import React from 'react';

const conversations = [
  {
    id: 1,
    name: 'Kenji Mori',
    avatar: '🎨',
    preview: "I'd love to do that dragon sleeve! Can you share any reference images?",
    time: '2m',
    unread: true,
  },
  {
    id: 2,
    name: 'Sofia Reyes',
    avatar: '🌸',
    preview: 'Sure! I have an opening next Tuesday at 3pm',
    time: '1h',
    unread: false,
  },
  {
    id: 3,
    name: 'Marcus Webb',
    avatar: '💀',
    preview: 'Your booking is confirmed for Saturday ✓',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 4,
    name: 'Luna Park',
    avatar: '🎨',
    preview: 'That watercolor concept sounds amazing!',
    time: '2d',
    unread: false,
  },
];

function Messages({ setScreen }) {
  return (
    <div className="page">

      <div className="nav">
        <div className="nav-logo">Tattoo<span>Spot</span></div>
        <button className="back-btn" onClick={() => setScreen('client')}>← Back</button>
      </div>

      <div className="content" style={{ padding: '20px 20px 100px' }}>

        <div className="section-header">
          <h2 className="page-title">Messages</h2>
          <p className="page-sub">Your conversations</p>
        </div>

        <div className="convo-list">
          {conversations.map(convo => (
            <div
              key={convo.id}
              className="convo-item"
              onClick={() => setScreen('chat')}
            >
              <div className="convo-avatar">
                {convo.avatar}
                {convo.unread && <div className="convo-dot"></div>}
              </div>
              <div className="convo-info">
                <div className="convo-name">{convo.name}</div>
                <div className="convo-preview">{convo.preview}</div>
              </div>
              <div className="convo-time">{convo.time}</div>
            </div>
          ))}
        </div>

      </div>

      <div className="tab-bar">
        <button className="tab-item" onClick={() => setScreen('client')}>
          <span className="tab-icon">🔍</span>
          <span className="tab-label">Discover</span>
        </button>
        <button className="tab-item active">
          <span className="tab-icon">💬</span>
          <span className="tab-label">Messages</span>
        </button>
        <button className="tab-item">
          <span className="tab-icon">📅</span>
          <span className="tab-label">Bookings</span>
        </button>
        <button className="tab-item">
          <span className="tab-icon">👤</span>
          <span className="tab-label">Profile</span>
        </button>
      </div>

    </div>
  );
}

export default Messages;