import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import DeclinePage from './DeclinePage.jsx';
import AcceptPage from './AcceptPage.jsx';
import ThankYouPage from './ThankYouPage.jsx';

import grassblock from './assets/grassblock.jpg';

function Home() {
  const [showExplosion, setShowExplosion] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowExplosion(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  
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
    fontFamily: 'MinecraftTwo'
  };

  return (
    <div style={backgroundStyle}>
      {showExplosion && (
        <img
          src="/assets/explosion.gif"
          alt="Explosion"
          className="explosion-gif"
        />
      )}
      <div className="App">
        <h1>You're invited to ALICIA'S BIRTHDAY PARTY!!!</h1>
        <p>Join us on May 15, 2025 at Central Park 🎂</p>
        <button onClick={() => navigate('/accept')}>HELL YEAH!!!!</button>
        <button onClick={() => navigate('/decline')}>Uhhh maybe not</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accept" element={<AcceptPage />} />
        <Route path="/decline" element={<DeclinePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
