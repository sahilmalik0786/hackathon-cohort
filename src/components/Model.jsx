import React, { useEffect, useMemo, forwardRef, useImperativeHandle, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../theme_provider/ThemeProvider';

const Model = forwardRef(function Model(props, ref) {
  const { scene } = useGLTF('/objects/screwdriver.glb');
  const groupRef = useRef(); // ← use this for actual animation
  const {DarkTheme} = useTheme()


  const material = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(DarkTheme ? '#C0C0C0' : '#ffffff'),
      metalness: 0.1,
      roughness: 0.2,
      transmission: 0.6,
      thickness: 1,
      ior: 1.5,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });
    
  }, [DarkTheme]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = material;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, material]);

  useImperativeHandle(ref, () => groupRef.current); // expose the group instead of scene

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
});

export default Model;
