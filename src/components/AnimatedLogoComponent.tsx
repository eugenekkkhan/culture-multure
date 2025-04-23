import { useEffect, useState } from "react";
import Loft from "../assets/loft.svg";
import Culture from "../assets/culture.svg";
import Multure from "../assets/multure.svg";

const AnimatedLogoComponent = () => {
  const [X, setX] = useState(30);

  useEffect(()=>{
    if (X !== 0) {
      setTimeout(()=>{
        setX(X/1.1);
      }, 5)
    }
  })

  return (
    <div className="">
      <div className="relative w-[247px] h-[40px]">
        <img className="absolute" style={{left: X}} src={Culture} alt="" />
        <img className="absolute" src={Multure} alt="" style={{left: -X}} />
        <img src={Loft} alt="" />
      </div>
    </div>
  );
};

export default AnimatedLogoComponent;
