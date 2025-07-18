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

  const { DarkTheme } = useTheme()
  const color = DarkTheme ? '#000000' : '#dadada'
  const intensity = DarkTheme ? '15' : '0.5'
  const force = DarkTheme ? 4 : 2
  const velocity = DarkTheme ? 0.90 : 0.99

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
  <div className='h-screen w-screen fixed inset-0 z-1 bg-primary-dark overflow-hidden dark:bg-primary-light mix-blend-color'>

  </div>
  <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}>


      <ImagePlane
        url= {image}
        position={[0, 1, 0]}
        size={[1, 1]}
      />

      <EffectComposer >

        <Fluid {...config} />
      </EffectComposer>
    </Canvas>

  </>
  
  )
}

export default Scene