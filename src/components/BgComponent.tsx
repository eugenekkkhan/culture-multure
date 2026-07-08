import useGetCurrScrollY from "../custom-hooks/useGetCurrScrollY";
import bg from "../assets/11.webp";

const BgComponent = () => {
  const posY = useGetCurrScrollY();

  const opacity = Math.min(0.45 + posY / window.innerHeight / 4, 0.7);
  return (
    <div>
      <img
        src={bg}
        alt=""
        fetchPriority="high"
        decoding="async"
        width={1280}
        height={830}
        className="h-screen w-screen fixed -z-20 object-cover object-center"
      />
      <div className='h-screen w-screen fixed -z-10 bg-brown-400 bg-center flex flex-col items-center justify-center' style={{opacity: opacity}}></div>
    </div>
  );
};

export default BgComponent;
