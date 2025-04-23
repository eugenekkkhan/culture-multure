import { useState, useEffect } from 'react'

const useGetCurrScrollY = (initValue: number = 0) => {
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }
  , []);
  return posY - initValue
}

export default useGetCurrScrollY