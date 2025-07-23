import React, { forwardRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { useTrans } from './Transitionprovider';

const ProductsCard = forwardRef((props, ref) => {
  // Track the GSAP tween so we can cancel it if needed
  let hoverTween = null;
  const {containerRef , goTo , animateIn } = useTrans()
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;

    const moveX = relX * 0.2; // adjust strength
    const moveY = relY * 0.1;
    

    hoverTween = gsap.to(card, {
      x: moveX,
      y: moveY,
   
      scale: 1.02,
      duration: 0.2,
      ease: 'power1.inOut',
    });
  };

  const handleMouseLeave = (e) => {
    hoverTween?.kill();
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
    
      scale: 1,
      duration: 0.7,
      ease: 'elastic.inOut',
    });
  };

  return (
 
    <div
      ref={ref}
      className="w-96 h-96 bg-red-400 rounded-md overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={()=>{
        goTo('/products')
      }}
    >
      {/* …your card content… */}
    </div>
   
  );
});

export default ProductsCard;
