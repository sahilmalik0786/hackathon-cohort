import React from 'react'
import { useTheme } from '../theme_provider/ThemeProvider'
import { RiMoonFill } from '@remixicon/react'
import { RiSunFill } from '@remixicon/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

gsap.registerPlugin(useGSAP)

const Navbar = () => {
    const [icon , setIcon] = useState('.sun')
  const {DarkTheme , toggleTheme} = useTheme()
  const moon = useRef()
  
   useEffect(()=>{
    const i = DarkTheme? '.sun' :'.moon'
    setIcon(i)
  })
  useGSAP(()=>{
    gsap.fromTo(icon,{
        y:10,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.9,
        ease:'elastic.out'
    })
  },[icon])
 

  return (
    <nav className='fixed top-10   w-full  p-3 flex items-center justify-between z-1'>
        <div>
            <h1 className='md:ml-36 md:text-2xl ml-14 text-sm'>
                store.com
            </h1>
        </div>
        <div className='flex gap-5'>
             <button className='dark:bg-primary-dark dark:text-primary-light bg-primary-light text-primary-dark px-4 hover:shadow-sm dark:shadow-gray-700 shadow-black active:scale-95 cursor-pointer transition-all font-suisse font-normal tracking-wide py-1 rounded-lg not-md:text-xs'>
                Shop Now
             </button>
              <button className='  flex items-center cursor-pointer mr-2' onClick={toggleTheme}>
             {!DarkTheme ? <RiMoonFill ref={moon} color='white' className='moon'/> : <RiSunFill className='sun'/>}
        </button>
        </div>
     
    </nav>
  )
}

export default Navbar