import AnimatedLogoComponent from "../components/AnimatedLogoComponent";

const AboutUs = () => {
  return (
    <div
      className="h-screen appear 
      flex lg:flex-row flex-col p-[18px]
      lg:gap-[120px] items-center justify-center"
    >
      <div className="p-[36px]">
        <div className="scale-[1.6] lg:scale-[1.4] flex items-center justify-center">
          <AnimatedLogoComponent />
        </div>
      </div>
      <div className="flex text-white flex-col gap-[28px]">
        <div>
          <h1 className="text-[36px] hidden font-bold lg:block">
            LOFT культур мультур
          </h1>
          <p className="text-[36px] text-center lg:text-left">
            – уникальное пространство <br />
            для Ваших мероприятий
          </p>
        </div>
        <button className="w-full cursor-pointer transition bg-gold hover:bg-brown-300 text-brown-400 text-[24px] py-[8px] rounded-[4px]">
          Забронировать
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
