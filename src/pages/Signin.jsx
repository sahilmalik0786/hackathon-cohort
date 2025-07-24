import React from 'react'
import logoimage from '../assets/LTT_Logo.png'
import gsap from 'gsap';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';



   


const Signin = () => {
    const navigate = useNavigate()
     const onSubmit = (data) => console.log(data)
    const {register , handleSubmit , formState:{errors}} = useForm()
    const containerRef = useRef()

    useEffect(()=>{
        const tl = gsap.timeline()
          tl.fromTo(containerRef.current ,{
      y:100,
      opacity:0,
      scale:0.9
    },{
      y:0,
      opacity:1,
      duration:0.4,
      ease:'power2.inOut'
    })
    tl.to(containerRef.current,{
      scale:1,
      duration:0.4
    })
    },[])
  return (
        <div className='w-full relative h-screen z-20 bg-white'>
            <div ref={containerRef} className='flex items-end not-md:flex-col w-full h-full justify-end'>
                   <div className='w-2/5 not-md:w-full not-md:h-2/5 h-full flex items-center justify-center bg-slate-300 p-1'>
                         <div className='w-3/4 h-3/5 flex gap-10 not-md:gap-10 items-center flex-col md:ml-30 p-1'>
                           <div className=' w-full'>
                             <img src={logoimage} alt="logo" />
                           </div>
                           <div className='w-full '>
                             <h1 className='capitalize font-suisse w-60 pl-4 not-md:text-xl text-4xl  '>
                               welcome! to the LTTSTORE
                             </h1>
                           </div>
                           <div className='w-full'>
                             <button className='bg-gradient-to-tr from-slate-300 to-slate-300 via-white dark:bg-gradient-to-tr dark:from-slate-600 dark:to-slate-800 dark:via-black px-3 py-1 rounded-md dark:text-white text-black cursor-pointer active:scale-95 transition-all duration-300 not-md:text-sm' onClick={() => {
                               navigate('/')
                             }}>
                               Back to Home
               
                             </button>
                           </div>
                         </div>
                       </div>
                <div className='w-3/5  not-md:w-full not-md:h-3/5 h-full bg-blue-800'>
                
                  
                </div>
                
            </div>
        </div>
  )
}

export default Signin