import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { setLenis } from '../utils/lenisInstance'; // adjust path
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger ,ScrollSmoother);

const SmoothScrollProvider = ({ children }) => {

   const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  // useEffect(() => {
  //   if (!ScrollSmoother.get()) {
  //     ScrollSmoother.create({
  //       wrapper: wrapperRef.current,
  //       content: contentRef.current,
  //       smooth: 2,
  //       effects: true,
  //     });
  //   }

  //   return () => {
  //     const smoother = ScrollSmoother.get();
  //     if (smoother) smoother.kill();
  //   };
  // }, []);
  // useEffect(()=>{
  //   ScrollSmoother.create({
  //     content:'#'
  //   })
  // })
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
      direction: 'vertical',
    });

    setLenis(lenis); //

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? 'transform' : 'fixed',
    });

     ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return   (
 <>
        {children}
        </>
  )
            
};

export default SmoothScrollProvider;
