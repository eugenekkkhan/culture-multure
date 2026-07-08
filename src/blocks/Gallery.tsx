import SingleCarousel from "../components/SingleCarousel";
import six from "../assets/6.webp";
import seven from "../assets/7.webp";
import eight from "../assets/8.webp";
import nine from "../assets/9.webp";

const Gallery = () => {

  return (
    <div className="text-white h-full overflow-x-clip">
      <p className="text-[48px] px-[48px] py-[48px]">
        Галерея
      </p>
      <div className="flex flex-col gap-[48px] items-center mb-[48px]">
        <SingleCarousel
          Img1={six}
          Img2={nine}
          Img3={eight}
          Img4={seven}
          direction
        />

        <SingleCarousel
          Img1={nine}
          Img2={eight}
          Img3={seven}
          Img4={nine}
        />

        <SingleCarousel
          Img1={six}
          Img2={seven}
          Img3={eight}
          Img4={nine}
          direction
        />

        <SingleCarousel
          Img1={six}
          Img2={seven}
          Img3={eight}
          Img4={nine}
        />
      </div>
    </div>
  );
};

export default Gallery;
