import React, { useState } from 'react';

const initialMessages = [
  {
    id: 1,
    text: "Hey! I saw your booking request for a dragon sleeve. Sounds amazing!",
    from: 'them',
    time: '10:32 AM',
  },
  {
    id: 2,
    text: "Yes! I've been planning this for years. Big fan of your Japanese work.",
    from: 'me',
    time: '10:34 AM',
  },
  {
    id: 3,
    text: "Can you share any reference images? It helps me understand what direction you're thinking.",
    from: 'them',
    time: '10:35 AM',
  },
  {
    id: 4,
    text: "Of course! I'm thinking full arm, mostly black and grey with red accents.",
    from: 'me',
    time: '10:37 AM',
  },
  {
    id: 5,
    text: "Perfect. Red accents on black and grey is one of my favorite combos. Friday at noon still work?",
    from: 'them',
    time: '10:38 AM',
  },
];

function Chat({ setScreen }) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  function sendMessage() {
    if (input.trim() === '') return;
    const newMessage = {
      id: messages.length + 1,
      text: input,
      from: 'me',
      time: 'Just now',
    };
    setMessages([...messages, newMessage]);
    setInput('');
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') sendMessage();
  }

  return (
    <div className="chat-wrap">

      {/* CHAT HEADER */}
      <div className="chat-header">
        <button className="back-btn" onClick={() => setScreen('messages')}>←</button>
        <div className="chat-avatar">🎨</div>
        <div className="chat-info">
          <div className="chat-name">Kenji Mori</div>
          <div className="chat-status">● Online</div>
        </div>
        <button className="chat-profile-btn" onClick={() => setScreen('profile')}>
          View Profile
        </button>
      </div>

      {/* MESSAGES */}
      <div className="chat-messages">
        {messages.map(msg => (
          <div key={msg.id} className={`msg ${msg.from}`}>
            <div className="msg-bubble">{msg.text}</div>
            <div className="msg-time">{msg.time}</div>
          </div>
        ))}
      </div>

      {/* INPUT BAR */}
      <div className="chat-input-bar">
        <button className="chat-attach-btn">📎</button>
        <input
          className="chat-input"
          type="text"
          placeholder="Message Kenji..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="chat-send-btn" onClick={sendMessage}>↑</button>
      </div>

    </div>
  );
}

export default Chat;