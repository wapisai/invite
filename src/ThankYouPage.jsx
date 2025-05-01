import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

function ThankYouPage() {
  const location = useLocation();
  const { name, username } = location.state || {};

  return (
    <div className="App">
      <h1>🎉 Thanks for RSVPing!</h1>
      {name && username ? (
        <p>See you there, <strong>{name}</strong> aka <strong>{username}</strong>!</p>
      ) : (
        <p>See you there!</p>
      )}
    </div>
  );
}

export default ThankYouPage;
