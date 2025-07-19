import React, { useRef, useEffect } from 'react';
import { useTheme } from '../theme_provider/ThemeProvider';
import gsap from 'gsap';

const TextEffect = ({ data ,stagger , duration ,posY}) => {
  const { DarkTheme } = useTheme();
  const spanRefs = useRef([]);

  spanRefs.current = [];

  const addToRefs = (el) => {
    if (el && !spanRefs.current.includes(el)) {
      spanRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      spanRefs.current,
      { y: posY, opacity: 0  },
      {
        y: 0,
       
        opacity: 1,
        duration: duration,
        stagger: stagger, // <- this adds stagger
        ease: 'power1.out',
      }
    );


  }, [data ][DarkTheme]);

  const handleMouseEnter = (index) => {
  gsap.to(spanRefs.current[index], {
  filter: 'url(#distort)',
  scale: 1.1,
  duration: 0.4,
 
  ease: 'power2.out',
});

  };

  const handleMouseLeave = (index) => {
 gsap.to(spanRefs.current[index], {
  filter: 'none',
  scale: 1,
  duration: 0.4,
  ease: 'power2.out',
});

  };

  return (
    <>
      <svg style={{ display: 'none' }}>
        <filter id="distort">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.02"
            numOctaves="3"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

    <div style={{ display: 'inline-block' }}>
      {data.split('').map((char, index) => (
        <span
          key={index}
          ref={addToRefs}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          style={{
            color: DarkTheme ? '#000000' : '#ffffff',
            cursor: 'default',
            display: 'inline-block',
            transformOrigin: 'center',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
    </>
  );
};

export default TextEffect;
