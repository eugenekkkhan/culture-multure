import { useEffect, useState } from "react";
import Loft from "../assets/loft.svg";
import Culture from "../assets/culture.svg";
import Multure from "../assets/multure.svg";

const AnimatedLogoComponent = () => {
  const [X, setX] = useState(30);

  useEffect(() => {
    const id = requestAnimationFrame(() => setX(0));
    return () => cancelAnimationFrame(id);
  }, []);

  const transition = "left 0.7s ease-out";

  return (
    <div className="relative">
      <img className="absolute" style={{ left: X, transition }} src={Culture} alt="" />
      <img className="absolute" src={Multure} alt="" style={{ left: -X, transition }} />
      <img src={Loft} alt="" />
    </div>
  );
};

export default AnimatedLogoComponent;
