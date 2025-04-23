import React, { useEffect, useState } from "react";
import useGetCurrScrollY from "../custom-hooks/useGetCurrScrollY";

interface Props {
  Img1: string;
  Img2: string;
  Img3: string;
  Img4: string;
  posY: number;
  offset?: number;
  direction?: boolean;
}

const clamp = (minValue: number, maxValue: number, value: number) => {  
  return Math.max(minValue, Math.min(maxValue, value));
}

const SingleCarousel = ({ Img1, Img2, Img3, Img4, posY, offset = 0, direction = false }: Props) => {
  let posX = !direction ? clamp(-200, 0, offset-(posY/5)) : clamp(-360, 0, offset-(posY/5));
  

  return (
    <div className="relative h-[480px]">
      {posX}
      <div className="absolute px-[48px] flex gap-[48px] overflow-clip" style={{ left: (direction ? -360-posX : posX) +'px' }}>
        <img className="w-[360px] h-[480px] rounded-[4px]" src={Img1} alt="" />
        <img className="w-[360px] h-[480px] rounded-[4px]" src={Img2} alt="" />
        <img className="w-[360px] h-[480px] rounded-[4px]" src={Img3} alt="" />
        <img className="w-[360px] h-[480px] rounded-[4px]" src={Img4} alt="" />
      </div>
    </div>
  );
};

export default SingleCarousel;
