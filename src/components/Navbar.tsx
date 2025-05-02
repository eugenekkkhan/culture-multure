import { useEffect, useState } from "react";
import Logo from "../assets/logo-loft-km.svg";
import { Link } from "react-scroll";
import LinkBar from "./LinkBar";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="z-20 bg-linear-to-b from-brown-400-alpha to-transparent fixed w-[calc(100vw-(100vw-100%))] px-[18px] md:px-[48px] py-[18px] gap-[18px] flex justify-between items-center">
      <Link
        to="about"
        smooth
        duration={500}
        className="cursor-pointer transition-all"
        activeClass="opacity-0 transition-all"
        spy
        offset={-100}
      >
        <img src={Logo} className="w-[134px] h-[40px] " />
      </Link>
      <div className="hidden md:flex text-white justify-between gap-[calc(8vw-56px)]">
        <LinkBar />
      </div>
      <div className={isActive ? 
        "md:hidden h-screen w-[100px] bg-brown-400-alpha right-[0px] top-[0px] absolute transition-all":
        "md:hidden h-screen w-[100px] bg-brown-400 -right-[100px] top-[0px] absolute transition-all"
      } />
      <div className={
        isActive ? "md:hidden flex flex-col text-white text-right justify-between absolute right-[18px] top-[54px] transition-all" 
        :          "md:hidden flex flex-col text-white text-right justify-between absolute -right-[96px] top-[54px] transition-all"
      }>
        <LinkBar />
      </div>
      
      <div className="hidden md:block">
        <button className="cursor-pointer transition bg-gold hover:bg-brown-300 text-brown-400 px-[36px] py-[8px] rounded-[4px]">
          Забронировать
        </button>
      </div>
      <div
        className="md:hidden relative w-[24px] h-[24px] cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <span
          className={
            !isActive
              ? "absolute transition-all top-[4px] w-[24px] h-[2px] bg-white"
              : "absolute transition-all top-[11px] w-[24px] h-[2px] bg-white rotate-45"
          }
        ></span>
        <span
          className={
            !isActive
              ? "absolute transition-all top-[calc(50%-1px)] w-[24px] h-[2px] bg-white"
              : "absolute transition-all top-[calc(50%-1px)] w-[0px] h-[2px] bg-white"
          }
        ></span>
        <span
          className={
            !isActive
              ? "absolute transition-all bottom-[4px] w-[24px] h-[2px] bg-white"
              : "absolute transition-all bottom-[11px] w-[24px] h-[2px] bg-white -rotate-45"
          }
        ></span>
      </div>
      
    </div>
  );
};

export default Navbar;
