import { useEffect, useRef, useState } from "react";
interface Props {
  Img1: string;
  Img2: string;
  Img3: string;
  Img4: string;
  direction?: boolean;
}

const clamp = (minValue: number, maxValue: number, value: number) => {  
  return Math.max(minValue, Math.min(maxValue, value));
}

const SingleCarousel = ({ Img1, Img2, Img3, Img4, direction = false }: Props) => {
  const [posY, setY] = useState<number | undefined>(0);
  const [viewportHeight, setViewportHeight] = useState<number>(0)
  const [viewportWidth, setViewportWidth] = useState<number>(0)
  const caroRef = useRef<HTMLDivElement | null>(null)
  useEffect(()=>{
    setViewportHeight(()=>window.innerHeight)
    document.addEventListener("scroll", 
      ()=>{
        if (caroRef.current) {
          setY(caroRef.current.getBoundingClientRect().top)
        }
      })
    
    window.addEventListener("resize",
      ()=>{
        setViewportWidth(()=>window.innerWidth);
      }
    )
  }, [])
  const posX: number = (posY && viewportHeight) ? clamp((direction ? 0 : -48), 360+(direction ? 48 : 0), -(posY-viewportHeight/2)/480*viewportHeight*2-viewportHeight/1.5) : 0;
  return (
    <div 
      className="relative h-[480px] w-[1176px] overflow-x-clip" 
      ref={caroRef}
      style={{opacity: `${posY && 1+posY/480}`}}
    >
      <div className="absolute flex flex-1 gap-[48px] overflow-hidden" style={{ left: (direction ? -posX : -360+posX) +'px' }}>
        <img 
          className="w-[360px] h-[480px] rounded-[4px]" src={Img1} 
          style={{
            opacity: viewportWidth > 1200 ? (direction ? `${1-posX/360}` : `${posX/360}`) : '0'
          }} alt="" />
        <img 
          className="w-[360px] h-[480px] rounded-[4px]" src={Img2} alt=""
          style={{
            opacity: viewportWidth < 1200 ? (direction ? `${1-posX/360}` : `${posX/360}`) : '1',
          }}
        />
        <img className="w-[360px] h-[480px] rounded-[4px]" src={Img3} alt="" 
          style={{
            opacity: viewportWidth < 1200 ? (direction ? `${posX/360}` : `${1-posX/360}`) : '1',
          }}
        />
        <img 
          className="w-[360px] h-[480px] rounded-[4px]" src={Img4} alt=""
          style={{
            opacity: viewportWidth > 1200 ? (direction ? `${posX/360}` : `${1-posX/360}`) : '0'
          }}
        />
      </div>
    </div>
  );
};

export default SingleCarousel;
