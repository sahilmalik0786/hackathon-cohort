


import Scene from './components/Scene';
import { Outlet } from 'react-router-dom';
import { useTheme } from './theme_provider/ThemeProvider';
// import ScrollToTop from './components/ScrollToTop';
import TransitionProvider from './components/Transitionprovider';
import Newsletter from './components/Newsletter';
import { useState } from 'react';
import { useEffect } from 'react';
import OpeningAnimation from './components/OpeningAnimaion';
import AnimatedLogo from './components/AnimatedLogo';


export default function AppLayout() {
 
  const {DarkTheme} = useTheme()
  //  const [showOpening, setShowOpening] = useState(true);

  // const [showLogo, setShowLogo] = useState(true);
const [showIntro, setShowIntro] = useState(true);
  // useEffect(() => {
  //   const shown = sessionStorage.getItem('intro-shown');
  //   if (shown) {
  //     setShowLogo(false);
  //   } else {
  //     sessionStorage.setItem('intro-shown', 'true');
  //   }
  // }, []);

  return (
<>
     {showIntro && <AnimatedLogo onComplete={() => setShowIntro(false)} />}
      {!showIntro && (  <div  className={`w-full  h-screen  ${DarkTheme && 'dark'}`}>
     


      <Scene />
      <Outlet />
     </div>
      )}
      </>



   
  );
}
