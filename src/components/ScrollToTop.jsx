import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getLenis } from '../utils/lenisInstance';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true } );
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
