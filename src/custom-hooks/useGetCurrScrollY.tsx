import { useState, useEffect } from 'react'

const useGetCurrScrollY = (initValue: number = 0) => {
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setPosY(window.scrollY);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }
  , []);
  return posY - initValue
}

export default useGetCurrScrollY
