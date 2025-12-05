import { useEffect, useState } from "react";

function useResponsivePageSize() {
  const [pageSize, setPageSize] = useState(0);
  const [bestPageSize, setBestPageSize] = useState(0);
  const [currentScreen, setCurrentScreen] = useState('');
  
  const handleResize = () => {
    const width = window.innerWidth;
    
    if (width >= 1200) {
      setPageSize(10);
      setBestPageSize(4);
      setCurrentScreen('pc');
    } else if (width >= 768) {
      setPageSize(6);
      setBestPageSize(2);
      setCurrentScreen('tablet');
    } else {
      setPageSize(4);
      setBestPageSize(1);
      setCurrentScreen('mobile');
    }
  };
  
  useEffect(() => {
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);
  
  return { pageSize, bestPageSize, currentScreen }
}

export default useResponsivePageSize;