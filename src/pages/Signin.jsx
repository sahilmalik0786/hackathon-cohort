import React from 'react'
import logoimage from '../assets/LTT_Logo.png'


const Signin = () => {
  return (
        <div className='w-full relative h-screen z-20 bg-green-800 '>
            <div className='flex items-end not-md:flex-col w-full h-full justify-end'>
                <div className='w-2/5 not-md:w-full not-md:h-2/5 h-full flex items-center justify-center bg-slate-300 p-1'>
                      <div className='w-3/4 h-3/5 flex gap-30 not-md:gap-10 flex-col  p-1'>
                       <div className='flex items-center gap-3 text-lg'>
                        <img src={logoimage} alt="" /> store.com
                       </div>
                       <div className='w-full'>
                        <h1 className='capitalize font-suisse w-52 pl-4 not-md:text-xl text-4xl '>
                            welcome! to the LTTSTORE 
                        </h1>
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