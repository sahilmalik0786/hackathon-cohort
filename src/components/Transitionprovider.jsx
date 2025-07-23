// components/TransitionProvider.jsx
import { createContext, useContext, useRef ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { getLenis } from '../utils/lenisInstance';

const TransitionContext = createContext();
export const useTrans = () => useContext(TransitionContext);



const TransitionProvider = ({ children }) => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
          const lenis = getLenis();
          
 
// const [first, setfirst] = useState(second)
  const goTo = (path) => {
    const tl = gsap.timeline({
      onComplete: () => {
        navigate(path); // route change AFTER animation
        lenis.resize()
 
      },
    });

    // Exit animation
    tl.to(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: 'power2.inOut',
    });
  };

  const animateIn = () => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 200  ,scale:0.3 },
      { opacity: 1, y: 0, scale:1, duration: 0.7, ease: 'power2.inOut' }
    );
  };

  return (
    <TransitionContext.Provider value={{ containerRef, goTo, animateIn }}>
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;