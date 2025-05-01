import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Add this
import './App.css';
import grassblock from './assets/grassblock.jpg';

function AcceptPage() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log('Name:', name);
    console.log('Minecraft Username:', username);

    const res = await fetch('https://script.google.com/macros/s/AKfycbzJh1NVDrVFk8smKhLh-a4Mjcri3N7MxLI1rgc4Nwpa_rbOjfdRcYB0Jj4-xACzl-Sn-Q/exec', {
      method: 'POST',
      body: JSON.stringify({ name, username }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      navigate('/thank-you', { state: { name, username } });
    } else {
      alert('Submission failed. Try again.');
    }
  };

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
        <p>Location: Punggol Central Parc Centros Blk 88</p>
        <p>Time: 6pm</p>
        <p>BRING YOUR MINECRAFT SPIRIT!!!</p>

        <input
          type="text"
          placeholder="Your name"
          className="input-box"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Minecraft username"
          className="input-box"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button onClick={handleSubmit}>IM COMING!!!</button>
      </div>
    </div>
  );
}

export default AcceptPage;
