


import Scene from './components/Scene';
import { Outlet } from 'react-router-dom';
import { useTheme } from './theme_provider/ThemeProvider';
// import ScrollToTop from './components/ScrollToTop';
import TransitionProvider from './components/Transitionprovider';
import Newsletter from './components/Newsletter';


export default function AppLayout() {
 
  const {DarkTheme} = useTheme()

  return (
    <div  className={`w-fullh-screen  ${DarkTheme && 'dark'}`}>



      <Scene />
      <Outlet />
     
      


    </div>
   
  );
}
