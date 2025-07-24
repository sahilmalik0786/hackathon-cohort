// components/OpeningAnimation.jsx
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const OpeningAnimation = ({ onComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".opening-screen", {
          opacity: 0,
          duration: 1,
          pointerEvents: "none",
          onComplete: onComplete,
        });
      },
    });

    // Example animation (change based on your design)
    tl.from(".logo-text", {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: "power4.out",
    });

  }, [onComplete]);

  return (
    <div className="opening-screen fixed inset-0 bg-black z-[9999] flex items-center justify-center text-white">
      <h1 className="logo-text text-4xl font-bold">Your Logo</h1>
    </div>
  );
};

export default OpeningAnimation;
