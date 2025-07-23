import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { setLenis } from '../utils/lenisInstance'; // adjust path

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.06,
      direction: 'vertical',
    });

    setLenis(lenis); //

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    ScrollTrigger.scrollerProxy('#lenis-root', {
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

  return <>{children}</>;
};

export default SmoothScrollProvider;
