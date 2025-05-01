import React, { useEffect, useRef } from 'react';
import zombie from './assets/zombie-minecraft.gif';

const ZombieFollower = () => {
  const zombieRef = useRef(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const zombiePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      const dx = mousePos.current.x - zombiePos.current.x;
      const dy = mousePos.current.y - zombiePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const speed = 2; // pixels per frame (adjust to your liking)

      if (distance > 1) {
        // Normalize direction vector
        const moveX = (dx / distance) * speed;
        const moveY = (dy / distance) * speed;

        // Update zombie position
        zombiePos.current.x += moveX;
        zombiePos.current.y += moveY;

        // Apply styles
        if (zombieRef.current) {
          zombieRef.current.style.left = `${zombiePos.current.x}px`;
          zombieRef.current.style.top = `${zombiePos.current.y}px`;
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
      ref={zombieRef}
      src={zombie}
      alt="Zombie"
      style={{
        position: 'absolute',
        left: zombiePos.current.x,
        top: zombiePos.current.y,
        transform: 'translate(-50%, -50%)',
        width: '60px',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default ZombieFollower;
