import React, { forwardRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { useTrans } from './Transitionprovider';

const ProductsCard = forwardRef((props ,ref) => {
  const {data ,db} = props
  // console.log(data)
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
      className="w-96 not-md:w-60 h-96 border cursor-pointer not-md:shrink-0 rounded-md overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={()=>{
        goTo(`/product/${data?.name}/${db}`)
      }}
    >
      
     <div className='group relative w-full h-full'>
      <img src={data?.Imgs[0]} alt="products-images" className='z-0 object-contain absolute w-full h-full '/>
      <div className='absolute z-1  rounded-md h-20 w-1/2 not-md:bottom-0 pl-12 group-hover:pl-0 not-md:right-0 not-md:pl-0 p-1  group-hover:right-0 -right-20 transition-all duration-300 bg-gradient-to-br from-purple-900 to-pink-300 via-blue-500/40'>
      <h2 className='dark:text-black text-white font-bold leading-5  text-lg not-md:text-sm '>{data?.name}</h2>
      <h3 className='text-gray-100 text-sm'>{data?.price}</h3>
      </div>
     </div>
    </div>
   
  );
});

export default ProductsCard;
