
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger)

const NewsletterArchive = () => {
  useEffect(()=>{
    gsap.fromTo('.cols' , {y:400},{
        scrollTrigger:{
            trigger:'.cols-p',
            start:'top center',
            end:'center center',
            markers:true,
            scrub:0.3
        },
        y:0,
        // stagger:0.2
    })
     gsap.fromTo('.cols1' , {y:200},{
        scrollTrigger:{
            trigger:'.cols-p',
            start:'top center',
            end:'center center',
            markers:true,
            scrub:0.3
        },
        y:0,
    })
      gsap.fromTo('.cols2' , {y:100},{
        scrollTrigger:{
            trigger:'.cols-p',
            start:'top center',
            end:'center center',
            markers:true,
            scrub:0.3,
           
        },
        y:0,
    })
  },[])

  return (
    <div className='w-full relative  cols-p grid grid-flow-col-dense columns-4 h-screen '>
       <div className=' bg-slate-300 cols'></div>
        <div className='bg-slate-300 cols1'></div>
         <div className='bg-slate-300 cols'></div>
          <div className='bg-slate-300 cols2'></div>
          <div className='w-full absolute inset-0 flex   p-10'>
                 
          </div>
    </div>
  )
}

export default NewsletterArchive