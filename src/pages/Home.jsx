

import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import ScrollSmoother from 'gsap/src/ScrollSmoother'
import { useEffect } from 'react'
import TextEffect from '../components/TextEffect'

import { useMediaQuery } from 'react-responsive'
import Section2 from '../components/homesections/Section2'
import Section3 from '../components/homesections/Section3'
import { useTrans } from '../components/Transitionprovider'
import Newsletter from '../components/Newsletter'
import NewsletterArchive from '../components/NewsletterArchive'
import { getLenis } from '../utils/lenisInstance'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)





const Home = () => {
  const test = useRef()
  // gsap.registerPlugin(ScrollTrigger)
  // const { DarkTheme, toggleTheme } = useTheme()
  const { containerRef, goTo, animateIn } = useTrans();
  
  const isMobile = useMediaQuery({
    query: '(max-width:650px)'
  })

 

  useEffect(() => {
    // ScrollSmoother.create({
animateIn()
const lenis = getLenis();

  // Delay to allow animateIn() to finish and DOM to fully render
  const timer = setTimeout(() => {
    // window.scrollTo(0, 0); // reset scroll to top

    if (lenis) {
      lenis.resize();
      lenis.scrollTo(0, { immediate: true });
    }
 ScrollTrigger.refresh()
     // re-evaluate all scroll triggers
  }, 600); // match animateIn() duration (0.7s)
    // re-evaluate all scroll triggers

  return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {

//  ScrollTrigger.refresh()
    gsap.to(test.current, {

      scrollTrigger: {
        trigger: '.page2',
        
        // markers: true,
        start: 'top bottom ',
        end: 'center 60%',
        scrub: 0.4
      },
      scale: 0.7,
      ease: 'power1.inOut'
    })

    gsap.fromTo('.page2', {


      scale: 0.8,

    }, {
      scrollTrigger: {
        trigger: '.page2',
        // markers: true,
        start: 'top bottom ',
        end: 'center 60%',
        scrub: 0.4
      },
      scale: 1,
    })
    gsap.fromTo('.page3', {


      scale: 0.8,

    }, {
      scrollTrigger: {
        trigger: '.page3',
       
        // markers: true,
        start: 'top bottom ',
        end: 'center 60%',
        scrub: 0.4
      },
      scale: 1,
    })
  })



  return (
    <>
  
    <div ref={containerRef} className='relative  w-full'>
      
      <div  className=' w-full  absolute scrollbar-hide  overflow-x-hidden'  >

        <div className=' w-full h-screen flex flex-col justify-end not-md:gap-10'>
          <div className='w-full flex not-md:h-full h-fit md:p-10 not-md:flex-col md:mb-10 not-md:justify-end '>
            <div className='w-[55%]  rounded-xl flex flex-col not-md:mb-20 not-md:w-3/3'>
              {/* {!isMobile &&  <DottedLine thickness={2} color={lineColor} />} */}
              <h1 className='text-2xl not-md:text-lg w-10/11 font-suisse text-white tracking-wide dark:text-black mt-1'>

                <span className='dark:text-red-800 text-red-400 font-bold'>BUILD</span> by tech <span className='text-blue-200 dark:text-blue-700'>nerds</span>, for tech nerds. <br />
                Quality over quantity — every time.
              </h1>
            </div>
            <div className='w-1/3 not-md:w-3/4 dark:bg-red-200/20 not-md:pl-10 pt-1'>
              <h1 className='text-3xl not-md:text-lg  font-suisse text-white tracking-wideest dark:text-black '>
                <TextEffect data="Upgrade your gear with tools that aren’t just cool — they’re Linus-tested. Join millions who trust LTT gear to build repair, and flex on cable management."
                  stagger={0.01}
                  duration={0.1}
                  posY={5}
                />
              </h1>
            </div>
          </div>
          <div className='w-full '>
            <h1 ref={test} className='md:text-[18rem] text-7xl dark:text-black text-white md:w-full md:text-center    font-suisse not-md:mb-10'>
              <TextEffect data="Lttstore.com"
                stagger={0.05}
                duration={0.6}
                posY={100} />
            </h1>
          </div>

        </div>
        <div className='w-full h-screen page2  p-7'>

          <Section2 />
        </div>
        <div className='w-full h-screen page3 p-7'>
          <Section3 />
        </div>
        <div className='scrollbar-hide'>
          <NewsletterArchive />
        </div>
        <div>
          <Newsletter />
        </div>
      </div>
     
       
    </div>
    </>
  )
}

export default Home