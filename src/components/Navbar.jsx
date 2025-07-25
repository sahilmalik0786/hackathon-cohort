
import { useTheme } from '../theme_provider/ThemeProvider'
import { RiMoonFill ,RiSunFill } from '@remixicon/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Canvas, useLoader } from '@react-three/fiber'
import * as THREE from "three";
import image from '../assets/LTT_Logo.png'
import { useMediaQuery } from 'react-responsive'
import { EffectComposer } from '@react-three/postprocessing'
import { Fluid } from '@whatisjery/react-fluid-distortion'

import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from "react";



gsap.registerPlugin(useGSAP)

const Navbar = () => {
    const [icon , setIcon] = useState('.sun')
  const {DarkTheme , toggleTheme} = useTheme()
  const moon = useRef()

   const isMobile = useMediaQuery({
    query: '(max-width:650px)'
  })
   const color = DarkTheme ? '#000000' : '#000000'
  const intensity = DarkTheme ? '1' : '1'
  const force = DarkTheme ? 4 : 2
  const velocity = DarkTheme ? 0.90 : 0.99
   const navRef = useRef();
 const lastScrollRef = useRef(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  
function ImagePlane({ url, position = [0, 0, 0], size = [1, 1] }) {
  const { DarkTheme } = useTheme()
  const color = DarkTheme ? '#000000' : '#ff0000'

  const texture = useLoader(THREE.TextureLoader, url);

  return (
    <mesh position={position} >
      <planeGeometry args={size} />
      <meshBasicMaterial map={texture} transparent color={color} />
    </mesh>

  );
}
  const config = {
    fluidColor: color,
    radius: 20,
    intensity: intensity,
    showBackground: false,
    velocityDissipation: velocity,
    force: force,
  }

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
 
  const navigate = useNavigate()
  return (
    <nav ref={navRef} className='fixed top-0   w-full  h-28 p-3 flex items-center justify-between z-1'>
        <div className='flex items-center p-1'>
          <Canvas className='rounded-full  '
         style={{
          width:isMobile?'40px':'80px',
          height:isMobile?'40px':'80px'
         }}
          >
              <ImagePlane
                    url= {image}
                    position={isMobile?[0,0,0]:[0,0,0]}
                    size={isMobile?[7,7]:[7,7]}
                  />
                    <EffectComposer >
                  
                      {!isMobile && <Fluid {...config} />}
                          
                        </EffectComposer>
          </Canvas>
            <h1 className=' md:text-2xl dark:text-black text-red-400 text-sm'>
                store.com
            </h1>
        </div>
        <div className='flex gap-5 not-md:gap-2 dark:text-black text-white'>
          <div className='flex  items-center justify-center cursor-default'>
            <button className='text-sm not-md:text-xs dark:text-black text-white before:content-[""] before:w-0 before:h-1 dark:before:bg-black before:bg-white before:absolute relative before:bottom-0 befor hover:before:w-full before:transition-all before:duration-200 overflow-hidden cursor-pointer active:scale-95' onClick={()=>navigate('/login')}> 
              Login
              </button>
              /
              <button className='text-sm not-md:text-xs dark:text-black text-white before:content-[""] before:w-0 before:h-1 dark:before:bg-black before:bg-white before:absolute relative before:bottom-0 befor hover:before:w-full before:transition-all before:duration-200 overflow-hidden cursor-pointer active:scale-95 ' onClick={()=>navigate('/signup')}>
                Signup
              </button>
          </div>
             <button onClick={()=>navigate('/products') } className='dark:bg-primary-dark dark:text-primary-light bg-primary-light text-primary-dark px-4 hover:shadow-sm dark:shadow-gray-700 shadow-black active:scale-95 cursor-pointer transition-all font-suisse font-normal tracking-wide py-1 rounded-lg not-md:text-xs'>
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