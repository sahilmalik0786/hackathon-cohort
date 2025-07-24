import React from 'react'
import TextEffect from './TextEffect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Newsletter = () => {
  const containerRef = useRef()
  const scrollRef = useRef()
  useEffect(() => {
    const tl = gsap.timeline()

    
    tl.fromTo(scrollRef.current, {
      y: 100,
    
      scale: 0.5,
    }, {
      scrollTrigger: {
        trigger: containerRef.current,
        // markers: true,
        start: 'top bottom',
        end: '40% 75%',
        scrub:0.5
      },
      y: 0,
      
      scale:1
    })
      
 
  })

  return (
    <div ref={containerRef} className='w-full '>
      <div ref={scrollRef} className='h-96 w-full flex flex-col justify-between' >
      <div  className='w-full flex p-2 not-md:flex-col  justify-between '>

        <h1 className='text-5xl mt-3 font-suisse text-gray-500'>
          Subscribe to our Newsletter
        </h1>
       <div className=' w-1/3 not-md:w-10/12 flex items-center mt-3'>
        <input type="text" placeholder='Enter your Email' className='h-full p-4 outline-none shadow  bg-black text-white rounded-md w-full'/>
       </div>

      </div>
      <div className='w-full  p-1'>
         <h1 className='text-[13rem] flex not-md:text-4xl not-md:leading-10  font-suisse leading-48'>
          <TextEffect data="LTTSTORE.COM" />
        </h1>
      </div>
      </div>
    </div>
  )
}

export default Newsletter