import React, { useEffect, useRef, useState } from "react";
import SingleCarousel from "../components/SingleCarousel";
import six from "../assets/6.jpg";
import seven from "../assets/7.jpg";
import eight from "../assets/8.jpg";
import nine from "../assets/9.jpg";
import useGetCurrScrollY from "../custom-hooks/useGetCurrScrollY";

const Gallery = () => {
  const posY = useGetCurrScrollY();
  const divRef = useRef<HTMLDivElement>(null);

  const [clientHeight, setclientHeight] = useState<number>();
  const [scrollWidth, setScrollWidth] = useState<number>();

  useEffect(() => {
    setclientHeight(divRef.current?.clientHeight);
    setScrollWidth(divRef.current?.scrollWidth);
    const handleResize = () => {
      setclientHeight(divRef.current?.clientHeight);
      setScrollWidth(divRef.current?.scrollWidth);
    };
    document.addEventListener("resize", handleResize);
    console.log(posY - clientHeight!);
  });

  return (
    <div ref={divRef} className="text-white h-full overflow-x-clip">
      <p className="text-[48px] px-[48px] py-[48px]">
        Галерея
      </p>
      <div className="flex flex-col w-[100%] gap-[48px]">
        <SingleCarousel
          Img1={six}
          Img2={seven}
          Img3={eight}
          Img4={nine}
          posY={(posY - clientHeight!) * 2}
          offset={-100}
        />

        <SingleCarousel
          Img1={six}
          Img2={seven}
          Img3={eight}
          Img4={nine}
          posY={(posY - clientHeight!) * 2}
          direction={true}
          offset={100}
        />

        <SingleCarousel
          Img1={six}
          Img2={seven}
          Img3={eight}
          Img4={nine}
          posY={(posY - clientHeight!) * 2}
          offset={300}
        />

        <SingleCarousel
          Img1={six}
          Img2={seven}
          Img3={eight}
          Img4={nine}
          posY={(posY - clientHeight!) * 2}
          offset={500}
          direction={true}
        />
      </div>
    </div>
  );
};

export default Gallery;
