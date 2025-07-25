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
        <div className='w-full fixed top-0 z-20 bg-white  '>
             <div ref={containerRef} className='flex items-end not-md:flex-col w-full h-screen  justify-end'>
               <div className='w-2/5 not-md:w-full not-md:h-2/5 h-full  flex items-center justify-center bg-slate-300 p-1'>
              
                  <div className='w-3/4 h-3/5 flex gap-10 not-md:gap-1 items-center flex-col md:ml-30 p-1'>
                   <div className=' w-full  not-md:mb-6 flex not-md:justify-center  '>
                     <img src={logoimage} alt="logo" />
                   </div>
                   <div className='w-full '>
                     <h1 className='capitalize font-suisse   not-md:text-xl text-4xl  '>
                       welcome! to the LTTSTORE.com
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
               <div className='w-3/5 flex items-center justify-center not-md:w-full not-md:h-3/5 h-full bg-slate-200'>
       
                 <div className='w-3/5 not-md:w-11/12 h-3/4  flex items-center flex-col gap-4 '>
                   <h1 className='text-4xl'>Sign Up</h1>
                   <form onSubmit={handleSubmit(onSubmit)}
                     className='  flex flex-col gap-4 w-10/12  not-md:w-11/12 h-fit p-3'>
                    
                     <div className='flex bg-slate-50 flex-col p-2 active:scale-95 rounded-xl gap-1  shadow-lg/10 hover:shadow-lg/25 transition-all duration-200'>
                       <label htmlFor="username" className='select-none'>Username </label>
                       <input id='username' {...register("username")} className='outline-none' />
                     </div>
       <div className='flex bg-slate-50 flex-col p-2 active:scale-95 rounded-xl gap-1  shadow-lg/10 hover:shadow-lg/25 transition-all duration-200'>
                       <label htmlFor="emial" className='select-none'>Enter your  Email</label>
                       <input id='email' {...register("email")} className='outline-none' />
                     </div>
                     <div className='flex bg-slate-50 flex-col p-2 active:scale-95 rounded-xl gap-1  shadow-lg/10 hover:shadow-lg/25 transition-all duration-200'>
                       <label htmlFor="password" className='select-none'>Password</label>
                       <input id='password' {...register("password", { required: true })} className='outline-none' />
                     </div>
                     {errors.password && <span>This field is required</span>}
       
                     <button className='bg-gradient-to-tr from-slate-300 to-slate-300 via-white dark:bg-gradient-to-tr dark:from-slate-600 dark:to-slate-800 dark:via-black px-3 py-1 rounded-md w-fit mx-auto dark:text-white text-black cursor-pointer active:scale-95 transition-all duration-300 not-md:text-sm'>
                       Submit
                     </button>
                   </form>
       
                   <div className='w-full flex items-center flex-col'>
                     or 
                     <h1>
                       Already have an Account ?  <span className='text-blue-600 cursor-pointer' onClick={()=>navigate('/login')}>Login here</span>
                     </h1>
                   </div>
       
                 </div>
       
               </div>
       
             </div>
           </div>
  )
}

export default Signin