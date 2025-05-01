import React, { useEffect, useRef } from 'react';
import slime from './assets/slime.gif';

const SlimeFollower = () => {
  const slimeRef = useRef(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const slimePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      const dx = mousePos.current.x - slimePos.current.x;
      const dy = mousePos.current.y - slimePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const speed = 0.000001; // pixels per frame (adjust to your liking)

      if (distance > 1) {
        // Normalize direction vector
        const moveX = (dx / distance) * speed;
        const moveY = (dy / distance) * speed;

        // Update slime position
        slimePos.current.x += moveX;
        slimePos.current.y += moveY;

        // Apply styles
        if (slimeRef.current) {
          slimeRef.current.style.left = `${slimePos.current.x}px`;
          slimeRef.current.style.top = `${slimePos.current.y}px`;
        }
      }
    }, 16); // ~60fps

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <img
      ref={slimeRef}
      src={slime}
      alt="slime"
      style={{
        position: 'absolute',
        left: slimePos.current.x,
        top: slimePos.current.y,
        transform: 'translate(-50%, -50%)',
        width: '60px',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default SlimeFollower;
