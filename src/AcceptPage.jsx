import React from 'react';
import './App.css';
import grassblock from './assets/grassblock.jpg';

function AcceptPage() {
  const backgroundStyle = {
    backgroundImage: `url(${grassblock})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'MinecraftOne'
  };

  return (
    <div style={backgroundStyle}>
      <div className="App">
        <h1>WOW this is SO SLAY!!!</h1>
        <p>We can't wait to see you there 🥳</p>
        <input
          type="text"
          placeholder="Your name"
          className="input-box"
        />
        <input
          type="text"
          placeholder="Minecraft username"
          className="input-box"
        />
        <button>Submit RSVP</button>
      </div>
    </div>
  );
}

export default AcceptPage;
