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




function ImagePlane({ url, position = [0, 0, 0], size = [1, 1] }) {
  const { DarkTheme } = useTheme()
  const color = DarkTheme ? '#000000' : '#'

  const texture = useLoader(THREE.TextureLoader, url);

  return (
    <mesh position={position} >
      <planeGeometry args={size} />
      <meshBasicMaterial map={texture} transparent color={color} />
    </mesh>

  );
}

const Scene = () => {

  const { DarkTheme,toggleTheme } = useTheme()
  const color = DarkTheme ? '#000000' : '#dadada'
  const intensity = DarkTheme ? '15' : '0.5'
  const force = DarkTheme ? 4 : 2
  const velocity = DarkTheme ? 0.90 : 0.99
    const isMobile = useMediaQuery({
    query: '(max-width:650px)'
  })

  const config = {
    fluidColor: color,
    radius: 0.05,
    intensity: intensity,
    showBackground: false,
    velocityDissipation: velocity,
    force: force,
  }

  return (
  
  <>
  <Navbar />
  <div className='h-screen w-screen fixed inset-0 z-5 bg-gradient-to-br from-neutral-700 to-primary-dark from-0% overflow-hidden pointer-events-none dark:bg-gradient-to-br dark:from-neutral-200 dark:to-neutral-50 dark:from-0% mix-blend-overlay'>
 
  </div>
  <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex:1
      }}>


      <ImagePlane
        url= {image}
        position={isMobile?[-1.4, 3.28, 0]:[-7.2,3.2,0]}
        size={isMobile?[0.4,0.4]:[1,1]}
      />

      <EffectComposer >

    {!isMobile && <Fluid {...config} />}
        
      </EffectComposer>
    </Canvas>

  </>
  
  )
}

export default Scene