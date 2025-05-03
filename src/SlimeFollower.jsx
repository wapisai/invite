import React, { useEffect, useRef } from 'react';
import slime from './assets/slime.gif';

const SlimeFollower = ({ speed = 1, offsetX = 0, offsetY = 0, mousePosRef }) => {
  // useRef for current slime position
  const slimeRef = useRef(null);
  const slimePos = useRef({
    x: window.innerWidth / 2 + offsetX,
    y: window.innerHeight / 2 + offsetY,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const { x: targetX, y: targetY } = mousePosRef.current;

      const dx = targetX - slimePos.current.x;
      const dy = targetY - slimePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 1) {
        const moveX = (dx / distance) * speed;
        const moveY = (dy / distance) * speed;

        slimePos.current.x += moveX;
        slimePos.current.y += moveY;

        if (slimeRef.current) {
          slimeRef.current.style.left = `${slimePos.current.x}px`;
          slimeRef.current.style.top = `${slimePos.current.y}px`;
        }
      }
    }, 16);

    return () => clearInterval(interval);
  }, [speed, mousePosRef]);

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
