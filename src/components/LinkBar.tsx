import React from "react";
import { Link } from "react-scroll";

const LinkBar = () => {
  return (
    <>
      <Link
        to="about"
        smooth
        duration={500}
        className="cursor-pointer transition-all"
        activeClass="text-gold"
        spy
      >
        О нас
      </Link>
      <Link
        to="gallery"
        smooth
        duration={500}
        activeClass="text-gold"
        className="cursor-pointer transition-all"
        spy
      >
        Галерея
      </Link>
      <Link
        to="price"
        smooth
        duration={500}
        className="cursor-pointer transition-all"
        activeClass="text-gold"
        spy
      >
        Прайс
      </Link>
      <Link
        to="reviews"
        smooth
        duration={500}
        activeClass="text-gold"
        className="cursor-pointer transition-all"
        spy
      >
        Отзывы
      </Link>
      <Link
        to="faq"
        smooth
        duration={500}
        activeClass="text-gold"
        className="cursor-pointer transition-all"
        spy
      >
        FAQ
      </Link>
      <Link
        to="contacts"
        smooth
        duration={500}
        activeClass="text-gold"
        className="cursor-pointer transition-all"
        spy
      >
        Контакты
      </Link>
    </>
  );
};

export default LinkBar;
