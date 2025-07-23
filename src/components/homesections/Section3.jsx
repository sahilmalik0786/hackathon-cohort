import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useRef, useEffect } from 'react';
import ProductsCard from '../ProductsCard';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Section2 = () => {
 
  const marqueeRef   = useRef(null);
  const tweenRef     = useRef(null);
  const section3Ref   = useRef(null);
  const productSection = useRef(null)

  // 1) Set up an array container for product refs
  const productRefs = useRef([]);
  productRefs.current = []; // reset on each render

  // 2) A function to add each card’s DOM node into productRefs.current
  const addProductRef = el => {
    if (el && !productRefs.current.includes(el)) {
      productRefs.current.push(el);
    }
  };

  
  const handleMouseEnter = () => {
    tweenRef.current?.pause();
    gsap.to(marqueeRef.current, { filter: 'url(#distort)', duration: 0.4, ease: 'linear' });
  };
  const handleMouseLeave = () => {
    tweenRef.current?.resume();
    gsap.to(marqueeRef.current, { filter: 'none', duration: 0.4, ease: 'linear' });
  };

  useEffect(() => {
 

    // — Marquee setup —
    const el = marqueeRef.current;
    const marqueeCtx = gsap.context(() => {
      tweenRef.current = gsap.to(el, {
        xPercent: 0,
        repeat: -1,
        ease: 'linear',
        duration: 30,
      });
      gsap.fromTo(el, { opacity: 0, y: 100 }, {
        opacity: 1, y: 0,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: section3Ref.current,
          start: '60% 70%',
          end: 'center center',
          scrub: 1,
        },
      });
    }, marqueeRef);

    // — Animate all product cards together —
    const productsCtx = gsap.context(() => {
      gsap.fromTo(productRefs.current,{
        x:-500,
        y:200,
        scale:0.3,
        opacity:0,

      }, {
       scrollTrigger:{
           trigger: productSection.current,
          start: 'top 70%',
          end: '30% center',
          markers:true,
          scrub: 0.4,
       },
       x: 0,
       y:10,
       opacity:1,
        scale:1,
        // duration:0.6,
        stagger:0.1,
        ease: 'power2.inOut',
      });
    }, section3Ref);

    return () => {
      marqueeCtx.revert();
      productsCtx.revert();
    };
  }, []);

  return (
    <div ref={section3Ref} className="h-full w-full rounded-md overflow-hidden">
      <div className="flex flex-col h-full w-full">
      

        <div ref={productSection} className="w-full  h-full flex flex-col gap-20 justify-end">
          <div className="f-pro flex justify-around">
            {/* Attach each card’s ref via addProductRef */}
            <ProductsCard ref={addProductRef}/>
            <ProductsCard ref={addProductRef} />
            <ProductsCard ref={addProductRef} />
          </div>

          <div className="h-32 p-1 flex overflow-hidden whitespace-nowrap">
            <div
              className="w-fit flex items-center"
              ref={marqueeRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
               style={{ transform: 'translateX(-50%)' }}

            >
              <svg style={{ display: 'none' }}>
                <filter id="distort">
                  <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="turbulence" />
                  <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="20" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </svg>
              {[...Array(2)].map((_, i) => (
                <h1 key={i} className="text-8xl pr-8 py-2 dark:text-black text-white">
                  BEST-SELLER BEST-SELLER BEST-SELLER BEST-SELLER BEST-SELLER BEST-SELLER
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
