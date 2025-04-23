import { useEffect, useState } from "react";
import useGetCurrScrollY from "../custom-hooks/useGetCurrScrollY";

const BgComponent = () => {
  const posY = useGetCurrScrollY();

  const opacity = Math.min(0.45 + posY / window.innerHeight / 4, 0.7);
  return (
    <div>
      <div className="h-screen w-screen fixed -z-20  bg-[url(assets/11.jpg)] bg-center flex flex-col items-center justify-center"></div>
      <div className='h-screen w-screen fixed -z-10 bg-brown-400 bg-center flex flex-col items-center justify-center' style={{opacity: opacity}}></div>
    </div>
  );
};

export default BgComponent;
