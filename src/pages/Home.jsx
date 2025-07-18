
import Scene from '../components/Scene'
import { useTheme } from '../theme_provider/ThemeProvider'
import { useGSAP  } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import ScrollSmoother from 'gsap/src/ScrollSmoother'
import { useEffect } from 'react'


gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger ,ScrollSmoother)





const Home = () => {
  const test = useRef()
  // gsap.registerPlugin(ScrollTrigger)
 const {DarkTheme , toggleTheme} = useTheme()
 // create the scrollSmoother before your scrollTriggers
 const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.5,
      effects: true,
    });
  }, []);
 
 useGSAP(()=>{


   gsap.to(test.current,{
      
       scrollTrigger:{
        trigger:'.page2',
        markers: true,
        start:'top bottom ',
        end:'center center',
        scrub:1
       },
        scale:0.7,
      //  repeat:-1,
      //  duration:1,
       ease:'power1.inOut'
   })
 })


  
  return (
   <div ref={wrapperRef} className='relative   w-full  '>
     <div ref={contentRef} className=' w-full overlay  absolute z-10  overflow-x-hidden' >   
      <div className=' w-full h-screen flex items-end'>
        <div className='w-full '>
          <h1 ref={test} className='md:text-[200px] text-7xl text-white md:w-full md:text-center  p-1.5 font-black'>
            LTT-STORE.com
          </h1>
        </div>

      </div>
      <div className='w-screen h-screen page2 text-white bg-red-400 p-10'>
sssss
      </div>
    </div>

 
    
   
   <Scene />
  
   </div>
  )
}

export default Home