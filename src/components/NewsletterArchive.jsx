
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import { RiArrowUpLongFill } from '@remixicon/react'
import { SplitText } from 'gsap/SplitText'
import { useMediaQuery } from 'react-responsive'


gsap.registerPlugin(ScrollTrigger, SplitText)

const NewsletterArchive = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:650px)'
  })
  useEffect(() => {
    const split = new SplitText('.text', { type: 'words , chars' })
    const tl = gsap.timeline()
    tl.fromTo('.cols', { y: 400 }, {
      scrollTrigger: {
        trigger: '.cols-p',
        start: 'top center',
        end: 'center center',
        // markers:true,
        scrub: 0.3
      },
      y: 0,
      // stagger:0.2
    })
    tl.fromTo('.cols1', { y: 200 }, {
      scrollTrigger: {
        trigger: '.cols-p',
        start: 'top center',
        end: 'center center',
        // markers:true,
        scrub: 0.3
      },
      y: 0,
    })
    tl.fromTo('.cols2', { y: 100 }, {
      scrollTrigger: {
        trigger: '.cols-p',
        start: 'top center',
        end: 'center center',
        // markers:true,
        scrub: 0.3,

      },
      y: 0,
    })
    tl.to('.arrow', {
      scrollTrigger: {
        trigger: '.cols-p',
        start: 'top center',
        end: 'center center',
        // markers:true,
        scrub: 1,


      },
      opacity: 0,

    })
    tl.from('.text', {
           

         y:2000,opacity:0,

      scrollTrigger:{
        trigger:'.cols-p',
         start: 'top center',
        end: 'center center',
        scrub: 0.2,


      },
      


  },'a')
  
   tl.from('.text2', {
           

     x:2000 ,opacity:0,scale:0,

      scrollTrigger:{
        trigger:'.cols-p',
         start: 'top center',
        end: 'center center',
        scrub: 0.1,


      },
      


  },'a')

}, [])

return (
  <div className='w-full relative  cols-p grid grid-flow-col-dense columns-4 h-screen overflow-hidden '>
    <div className=' bg-slate-300 cols flex justify-end '><div className='mt-5 arrow'><RiArrowUpLongFill /></div></div>
    <div className='bg-slate-300 cols1 flex justify-end'><div className='mt-5 arrow'><RiArrowUpLongFill /></div></div>
    <div className='bg-slate-300 cols flex justify-end'><div className='mt-5 arrow'><RiArrowUpLongFill /></div></div>
    <div className='bg-slate-300 cols2 flex justify-end'><div className='mt-5 arrow'><RiArrowUpLongFill /></div></div>
    <div className='w-full absolute inset-0 flex  items-center p-10'>
      <div className='flex not-md:flex-col items-center gap-5 not-md:gap-6'>
        <h1 className='text-2xl not-md:text-xl w-10/12 not-md:w-full text-gray-700 text'>
          Welcome to the official merch store of Linus Tech Tips! We create high-quality, tech-inspired gear designed for fans, by fans. From our legendary water bottles to ultra-comfy hoodies, every product is tested to survive even the most brutal "accidental" drops (we’re looking at you, Linus).

          By supporting LTTStore, you’re helping fuel independent tech content—and looking awesome while doing it. Thanks for being part of our community!
        </h1>
        <h2 className='text2'>By supporting LTTStore, you’re helping fuel independent tech content—and looking awesome while doing it. Thanks for being part of our community!</h2>
      </div>
    </div>
  </div>
)
}

export default NewsletterArchive