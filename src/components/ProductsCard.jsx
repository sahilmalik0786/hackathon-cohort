import React, { forwardRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const ProductsCard = forwardRef((props ,ref) => {
  const {data ,db} = props
  // console.log(data)
  // Track the GSAP tween so we can cancel it if needed
  let hoverTween = null;
 
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
   <Link to={`/product/${data?.name}/${db}`}>
    <div
      ref={ref}
      className="w-96 not-md:w-56 h-96 not-md:h-72 border cursor-pointer not-md:shrink-0 rounded-md overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    
    >
      
     <div className='group relative w-full h-full'>
      <img src={data?.Imgs[0]} alt="products-images" className='z-0 object-contain absolute w-full h-full '/>
      <div className='absolute z-1  rounded-md not-md:h-20 h-44 w-1/3 not-md:w-1/2 not-md:bottom-0 pl-12 group-hover:pl-0 not-md:right-0 not-md:pl-0 p-1  group-hover:right-0 -right-20 transition-all duration-100 bg-gradient-to-tr from-slate-300/70 to-slate-300/50 via-white/90 dark:bg-gradient-to-tr dark:from-slate-600/40 dark:to-slate-800/40 dark:via-black '>
      <h2 className='dark:text-white text-black font-bold leading-5  text-lg not-md:text-sm '>{data?.name}</h2>
      <h3 className='text-gray-700 dark:text-gray-100 text-sm mt-2'>{data?.price}</h3>
      </div>
     </div>
    </div>
    </Link>
   
  );
});

export default ProductsCard;
