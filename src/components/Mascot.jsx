import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Mascot = ({ type = 'waving', className = '', style = {} }) => {
  const mascotRef = useRef(null);

  useEffect(() => {
    // Basic bouncy animation on mount
    gsap.fromTo(
      mascotRef.current,
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
      }
    );

    // Floating idle animation
    gsap.to(mascotRef.current, {
      y: '-10px',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, [type]);

  const getImagePath = () => {
    // Use relative paths to work with any base path (like /my_portfolio/)
    switch (type) {
      case 'thinking':
        return './assets/mascot/thinking.png';
      case 'waving':
      default:
        return './assets/mascot/waving.png';
    }
  };

  return (
    <div
      ref={mascotRef}
      className={`mascot-container ${className}`}
      style={{
        width: '250px',
        height: 'auto',
        zIndex: 10,
        ...style,
      }}
    >
      <img
        src={getImagePath()}
        alt={`Mascot ${type}`}
        style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.2))' }}
      />
    </div>
  );
};

export default Mascot;
