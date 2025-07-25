


import Scene from './components/Scene';
import { Outlet } from 'react-router-dom';
import { useTheme } from './theme_provider/ThemeProvider';
import { useState } from 'react';
import AnimatedLogo from './components/AnimatedLogo';


export default function AppLayout() {

  const { DarkTheme } = useTheme()

  const [showIntro, setShowIntro] = useState(true);


  return (
    <>
      {showIntro && <AnimatedLogo onComplete={() => setShowIntro(false)} />}
      {!showIntro && (<div className={`w-full  h-screen  ${DarkTheme && 'dark'}`}>
        <Scene />
        <Outlet />
      </div>
      )}
    </>




  );
}
