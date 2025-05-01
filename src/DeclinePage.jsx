import React from 'react';
import './App.css'; // Optional: reuse styles
import herobrine from './assets/herobrine.jpg';


function DeclinePage() {

  const backgroundStyle = {
    backgroundImage: `url(${herobrine})`,
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
      <h1 className="decline-heading">cheebai...</h1>
    </div>
  );
}

export default DeclinePage;
