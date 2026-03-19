import React, { useState } from 'react';

const dates = [
  { day: 'THU', num: '20' },
  { day: 'FRI', num: '21' },
  { day: 'SAT', num: '22' },
  { day: 'SUN', num: '23' },
];

const times = [
  '10:00 AM', '12:00 PM', '2:00 PM',
  '4:00 PM', '6:00 PM', '8:00 PM'
];

function Booking({ setScreen }) {
  const [selectedDate, setSelectedDate] = useState('21');
  const [selectedTime, setSelectedTime] = useState('12:00 PM');
  const [style, setStyle] = useState('Japanese / Irezumi');
  const [placement, setPlacement] = useState('Full Sleeve');
  const [duration, setDuration] = useState('2 hours');
  const [description, setDescription] = useState('');

  function handleSubmit() {
    setScreen('confirmation');
  }

  return (
    <div className="page">

      {/* NAV */}
      <div className="nav">
        <button className="back-btn" onClick={() => setScreen('profile')}>← Back</button>
        <div className="nav-logo">Tattoo<span>Spot</span></div>
        <div style={{ width: '60px' }}></div>
      </div>

      <div className="content">

        {/* HEADER */}
        <div className="section-header">
          <h2 className="page-title">Book a Session</h2>
          <p className="page-sub">With Kenji Mori · Brooklyn, NY</p>
        </div>

        {/* STYLE */}
        <div className="form-group">
          <label className="form-label">TATTOO STYLE</label>
          <select
            className="form-select"
            value={style}
            onChange={e => setStyle(e.target.value)}
          >
            <option>Japanese / Irezumi</option>
            <option>Neo-Traditional</option>
            <option>Custom Design</option>
            <option>Color Work</option>
          </select>
        </div>

        {/* PLACEMENT */}
        <div className="form-group">
          <label className="form-label">PLACEMENT</label>
          <select
            className="form-select"
            value={placement}
            onChange={e => setPlacement(e.target.value)}
          >
            <option>Full Sleeve</option>
            <option>Upper Arm</option>
            <option>Back Piece</option>
            <option>Chest</option>
            <option>Calf</option>
            <option>Wrist</option>
            <option>Other</option>
          </select>
        </div>

        {/* DESCRIPTION */}
        <div className="form-group">
          <label className="form-label">DESCRIBE YOUR VISION</label>
          <textarea
            className="form-textarea"
            placeholder="Describe what you'd like — themes, size, colors, reference images..."
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        {/* DATE PICKER */}
        <label className="form-label">SELECT DATE</label>
        <div className="date-grid">
          {dates.map(date => (
            <div
              key={date.num}
              className={`date-chip ${selectedDate === date.num ? 'selected' : ''}`}
              onClick={() => setSelectedDate(date.num)}
            >
              <div className="date-day">{date.day}</div>
              <div className="date-num">{date.num}</div>
            </div>
          ))}
        </div>

        {/* TIME PICKER */}
        <label className="form-label">SELECT TIME</label>
        <div className="time-grid">
          {times.map(time => (
            <div
              key={time}
              className={`time-chip ${selectedTime === time ? 'selected' : ''}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </div>
          ))}
        </div>

        {/* DURATION */}
        <div className="form-group">
          <label className="form-label">ESTIMATED DURATION</label>
          <select
            className="form-select"
            value={duration}
            onChange={e => setDuration(e.target.value)}
          >
            <option>2 hours</option>
            <option>3 hours</option>
            <option>4 hours</option>
            <option>Full day (6+ hrs)</option>
          </select>
        </div>

        {/* SUMMARY CARD */}
        <div className="info-card" style={{ marginBottom: '16px' }}>
          <div className="booking-row">
            <span className="booking-row-label">Artist</span>
            <span className="booking-row-val">Kenji Mori</span>
          </div>
          <div className="booking-row">
            <span className="booking-row-label">Date</span>
            <span className="booking-row-val">Mar {selectedDate}</span>
          </div>
          <div className="booking-row">
            <span className="booking-row-label">Time</span>
            <span className="booking-row-val">{selectedTime}</span>
          </div>
          <div className="booking-row">
            <span className="booking-row-label">Style</span>
            <span className="booking-row-val">{style}</span>
          </div>
          <div className="booking-row">
            <span className="booking-row-label">Duration</span>
            <span className="booking-row-val">{duration}</span>
          </div>
          <div className="booking-row">
            <span className="booking-row-label">Deposit Due</span>
            <span className="booking-row-val" style={{ color: '#c84b2f' }}>$100</span>
          </div>
        </div>

        {/* SUBMIT */}
        <button className="btn btn-primary" onClick={handleSubmit}>
          Send Booking Request →
        </button>
        <p className="booking-note">
          A $100 deposit will be collected upon artist approval
        </p>

      </div>
    </div>
  );
}

export default Booking;