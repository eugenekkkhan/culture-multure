import { Link } from "react-scroll";
import LogoLoft from "./LogoLoft";

const Footer = () => {
  return (
    <div className="bg-gold text-brown-400 text-[24px] flex md:items-center items-start md:flex-row flex-col gap-[24px] md:justify-center fill-brown-400 p-[48px]">
      <LogoLoft className="md:fill-brown-400 fill-brown-400-alpha flex-1 w-full" />
      <div className="flex md:flex-row flex-col flex-1 items-start justify-center md:gap-[64px] gap-[24px]">
        <div className="flex flex-col text-[24px]">
          <h3 className="text-[36px]">Карта сайта</h3>
          <Link 
            to="about"
            smooth
            duration={500}
            className="cursor-pointer"
          >
            О нас
          </Link>
          <Link
            to="gallery"
            smooth
            duration={500}
            className="cursor-pointer"
          >
            Галерея
          </Link>
          <Link
            to="price"
            smooth
            duration={500}
            className="cursor-pointer"
          >
            Прайс
          </Link>
          <Link
            to="reviews"
            smooth
            duration={500}
            className="cursor-pointer"
          >
            Отзывы
          </Link>
          <Link
            to="faq"
            smooth
            duration={500}
            className="cursor-pointer"
          >
            FAQ
          </Link>
          <Link
            to="contacts"
            smooth
            duration={500}
            className="cursor-pointer"
          >
            Контакты
          </Link>
        </div>
        <div>
          <h3 className="text-[36px]">Документы</h3>
          <p>Договор оферты</p>
          <p>Crash list</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
