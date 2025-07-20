import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useRef } from 'react';
import ProductsCard from '../ProductsCard';
import { useEffect } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Section2 = () => {
    const headingRef = useRef(null);
    const marqueeRef = useRef(null);
    const tweenRef = useRef(null);
    const sectionRef = useRef(null)
    const handleMouseEnter = () => {
        tweenRef.current?.pause()
        gsap.to(marqueeRef.current, {

            filter: 'url(#distort)',
            //   scale: 1.1,
            duration: 0.4,

            ease: 'linear',
        });

    };

    const handleMouseLeave = () => {
        tweenRef.current?.resume();
        gsap.to(marqueeRef.current, {
            filter: 'none',
            //   scale: 1,
            duration: 0.4,
            ease: 'linear',
        });

    };
    useEffect(() => {
        // Ensure fonts are loaded first
        document.fonts.ready.then(() => {
            const split = new SplitText(headingRef.current, {
                type: 'words,chars',
            });

            gsap.from(split.chars, {
                x: 10,
                y: 20,
                opacity: 0,
                ease: 'power4.out',
                stagger: 0.05,
                duration: 1,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub: 0.2,
                    //   markers: true,
                },
                onComplete: () => {
                    split.revert(); // Optional: restore original HTML
                },
            });
        });

        const el = marqueeRef.current;

        const ctx = gsap.context(() => {
            tweenRef.current = gsap.to(el, {
                xPercent: -50,
                repeat: -1,
                ease: 'linear',
                duration: 30, // slower = smoother

            });
            gsap.fromTo(el, {
                opacity: 0,
                y: 100

            }, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: '60% 70%',
                    end: 'center center',
                    scrub: 1,
                    //   markers: true,
                },
                y:0,
                opacity:1,
                ease:'power3.inOut'
            })
        }, marqueeRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className='h-full w-full  rounded-md overflow-hidden'>
            <div className='flex flex-col h-full w-full '>
                <div className='h-fit flex self-center p-2'>
                    <h2
                        ref={headingRef}
                        className='uppercase text-sm py-1 px-2 rounded-xl dark:bg-red-500 dark:text-white  bg-red-100'
                    >
                        what we offer
                    </h2>
                </div>
                {/* <div className='h-fit mt-30 p-10'>
          <h1 className='text-4xl font-suisse'>Featured Products</h1>
        </div> */}
                <div className=' w-full dark:bg-red-300/20 bg-white/40   h-full flex flex-col gap-20 justify-end'>
                    <div className='f-pro flex justify-around  '>
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                    </div>
                    <div className=' h-32 p-1 flex overflow-hidden whitespace-nowrap'>
                        <div className=' w-fit flex items-center' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={marqueeRef}>
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
                            <h1 className='text-8xl pr-8'>
                                FEATURED-PRODUCTS FEATURED-PRODUCTS FEATURED-PRODUCTS FEATURED-PRODUCTS FEATURED-PRODUCTS FEATURED-PRODUCTS
                            </h1>
                            <h1 className='text-8xl pr-8'>
                                FEATURED-PRODUCTS FEATURED-PRODUCTS FEATURED-PRODUCTS FEATURED-PRODUCTS FEATURED-PRODUCTS FEATURED-PRODUCTS
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;
