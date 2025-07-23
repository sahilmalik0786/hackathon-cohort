import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useRef, useEffect } from 'react';
import ProductsCard from '../ProductsCard';
import { bestproducts } from '../../services/productsData/screwdrivers';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Section2 = () => {
  const headingRef   = useRef(null);
  const marqueeRef   = useRef(null);
  const tweenRef     = useRef(null);
  const sectionRef   = useRef(null);
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
    // — SplitText animation on heading —
    document.fonts.ready.then(() => {
      const split = new SplitText(headingRef.current, { type: 'words,chars' });
      gsap.from(split.chars, {
        x: 10, y: 20, opacity: 0,
        ease: 'power4.out',
        stagger: 0.05,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 0.2,
        },
        onComplete: () => split.revert(),
      });
    });

    // — Marquee setup —
    const el = marqueeRef.current;
    const marqueeCtx = gsap.context(() => {
      tweenRef.current = gsap.to(el, {
        xPercent: -50,
        repeat: -1,
        ease: 'linear',
        duration: 30,
      });
      gsap.fromTo(el, { opacity: 0, y: 100 }, {
        opacity: 1, y: 0,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '60% 70%',
          end: 'center center',
          scrub: 1,
        },
      });
    }, marqueeRef);

    // — Animate all product cards together —
    const productsCtx = gsap.context(() => {
      gsap.fromTo(productRefs.current,{
        x:500,
        y:200,
        scale:0.3,
        opacity:0,

      }, {
       scrollTrigger:{
           trigger: productSection.current,
          start: 'top 70%',
          end: '30% center',
          // markers:true,
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
    }, sectionRef);

    return () => {
      marqueeCtx.revert();
      productsCtx.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="h-full w-full   rounded-md overflow-hidden">
      <div className="flex flex-col h-full w-full">
        <div className="h-fit flex self-center p-2">
          <h2
            ref={headingRef}
            className="uppercase text-sm py-1 px-2 rounded-xl not-md:mt-5 dark:bg-red-500 dark:text-white bg-red-400"
          >
            what we offer
          </h2>
        </div>

        <div ref={productSection} className="w-full   h-full flex flex-col gap-20 justify-end">
          <div className="f-pro  not-md:flex-nowrap  not-md:overflow-x-scroll overflow-y-hidden items-center p-3 snap-x snap-mandatory  gap-2 not-md:shrink-0 flex justify-around ">
            {/* Attach each card’s ref via addProductRef */}
           {bestproducts?.map((e ,i )=>{
            return <ProductsCard ref={addProductRef} db={'featured'} key={i} data={e}/>

           })}
          
          </div>

          <div className="h-32 p-1 flex overflow-hidden whitespace-nowrap">
            <div
              className="w-fit flex items-center"
              ref={marqueeRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <svg style={{ display: 'none' }}>
                <filter id="distort">
                  <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="turbulence" />
                  <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="20" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </svg>
              {[...Array(2)].map((_, i) => (
                <h1 key={i} className="text-8xl not-md:text-3xl pr-8 dark:text-black text-white">
                  FEATURED-PRODUCTS FEATURED-PRODUCTS FEATURED-PRODUCTS FEATURED-PRODUCTS
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
