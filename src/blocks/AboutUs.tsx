import { useEffect, useRef, useState } from "react";
import AnimatedLogoComponent from "../components/AnimatedLogoComponent";

const AboutUs = () => {
  const [posY, setPosY] = useState(0);
  const [opacity, setOpacity] = useState(100);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const heightOfBlock = divRef.current?.offsetHeight;
    // if (opacity != 100) {
    //   setTimeout(()=>{
    //     setOpacity(opacity+1)
    //   },1)
    // }
    
    document.addEventListener('scroll', ()=>{
      
    })
  })

  return (
    <div ref={divRef} className="h-screen appear flex flex-row gap-[120px] items-center justify-center" style={{opacity: opacity+'%'}}>
      <div>
        <AnimatedLogoComponent />
      </div>
      <div className="flex text-white flex-col gap-[28px]">
        <div>
          <h1 className="text-[36px] font-bold">LOFT культур мультур</h1>
          <p className="text-[36px]">
            – уникальное пространство <br />
            для Ваших мероприятий
          </p>
        </div>
        <button className="w-full cursor-pointer transition bg-gold hover:bg-brown-300 text-brown-400 text-[24px] py-[8px] rounded-[4px]">Забронировать</button>
      </div>
    </div>
  );
};

export default AboutUs;
