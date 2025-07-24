// import React from 'react'
// import { Canvas } from '@react-three/fiber'

// const Scene = () => {
//   return (
//    <Canvas className='bg-gray-800'>
//   <mesh>
//     <boxGeometry />
//     <meshStandardMaterial />
//   </mesh>
// </Canvas>

//   )
// }

// export default Scene

import { Fluid } from '@whatisjery/react-fluid-distortion';
import { EffectComposer } from '@react-three/postprocessing';
import { Canvas, useLoader } from '@react-three/fiber';
import image from '../assets/LTT_Logo.png'
import * as THREE from "three";
import { useTheme } from '../theme_provider/ThemeProvider';
import Navbar from './Navbar';
import { useMediaQuery } from 'react-responsive';
import Model from './Model';
import { useRef } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger , useGSAP);







const Scene = () => {

  const { DarkTheme,toggleTheme } = useTheme()
  const color = DarkTheme ? '#000000' : '#dadada'
  const intensity = DarkTheme ? '18' : '0.5'
  const force = DarkTheme ? 4 : 2
  const velocity = DarkTheme ? 0.90 : 0.95
    const isMobile = useMediaQuery({
    query: '(max-width:650px)'
  })
  const modelRef = useRef()

  const config = {
    fluidColor: color,
    radius: 0.05,
    intensity: intensity,
    showBackground: false,
    velocityDissipation: velocity,
    force: force,
  }

useEffect(() => {
  if (!modelRef.current) return;

  gsap.to(modelRef.current.rotation, {
    y: 20,
    // x:20,
    // z:10,
    // skewX:22,
    duration:10,
    repeat:-1,
    yoyo:true,
    ease:'power2.inOut'
   
    // scrollTrigger: {
    //   trigger: '.page2',
    //   start: 'top center',
    //   end: 'bottom center',
    //   // scrub: true,
    //   markers:true,
    // },
  });

  gsap.to(modelRef.current.position, {
    x: 1.2,
    y: 1.2,
    z: 1.2,
    scrollTrigger: {
      trigger: '.page2',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
     
    },
  });
}, []);

  return (
  
  <>
  <Navbar />
  <div id='over' className={`h-screen w-screen  fixed inset-0  bg-gradient-to-br from-neutral-700 to-primary-dark from-0% overflow-hidden pointer-events-none dark:bg-gradient-to-br dark:from-neutral-200 dark:to-neutral-50 dark:from-0% dark:mix-blend-normal`}>
   
  </div>
  <Canvas
  
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex:100
      }} >
       
        {/* <ambientLight intensity={0.5}  /> */}
   {/* <Model ref={modelRef} scale={1.5} position={[0, -1, 0]} /> */}
    
    

      <EffectComposer >

    {!isMobile && <Fluid {...config} />}
        
      </EffectComposer>
    </Canvas>

  </>
  
  )
}

export default Scene