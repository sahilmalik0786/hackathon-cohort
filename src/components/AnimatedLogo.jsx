import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import TextEffect from './TextEffect';
import { SplitText } from 'gsap/SplitText';

const AnimatedLogo = ({ onComplete }) => {
    const wrapperRef = useRef();
    const pathsRef = useRef([]);
    const [ready, setReady] = useState(false);
    const headingRef = useRef()
    gsap.registerPlugin(SplitText)

    // Ensure DOM is painted before measuring SVG paths
    useEffect(() => {
        const id = requestAnimationFrame(() => setReady(true));
        return () => cancelAnimationFrame(id);
    }, []);

    useEffect(() => {
        if (!ready) return;

        const handleLoad = () => {
            document.body.style.overflow = 'hidden';



            const tl = gsap.timeline({
                onComplete: () => {

                    if (onComplete) onComplete();
                },
            });
            const split = new SplitText(headingRef.current, { type: 'words,chars' });

            tl.from(split.chars, {
                x: 10, y: 20, opacity: 0,
                ease: 'power4.out',
                stagger: 0.05,
                duration: 1,

                onComplete: () => split.revert(),
            });
            tl.to('.text', {
                opacity: 0,
                y: 500,
                duration: 0.8,
                ease: 'power3.in'


            })
            tl.to(wrapperRef.current, {
                // autoAlpha: 0,
                y: -3000,

                borderRadius: "150px",
                // y:3000,
                duration: 1,
                // delay: 0.1,
                ease: 'power1.inOut',
            });
            tl.to(wrapperRef.current, {
                y: 1000,
                duration: 1,
                delay: 0.2,
                ease: 'power1.out'
            })
        //    tl.fromTo('#over',{
        //     scale:0.3,
        //     y:-100,
        //     duration:0.3
        //    },{
        //     scale:1,
        //     duration:0.8,
        //     ease:'power2.inOut'
        //    })





        };


        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, [ready, onComplete]);

    return (
        <div
            ref={wrapperRef}
            className="logo-wrapper fixed inset-0 bg-black flex items-center justify-center text-white"
        >
            <h1 ref={headingRef} className='text-8xl not-md:text-3xl text text-white '>
                LTTSTORE.com
            </h1>
        </div>
    );
};

export default AnimatedLogo;
