import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { FaTelegram, FaVk, FaWhatsapp } from "react-icons/fa6";

const Contacts = () => {
  return (
    <YMaps>
      <div className="flex flex-col md:flex-row">
        <Map
          defaultState={{
            center: [50.983108, 39.480831],
            zoom: 15,
          }}
          className="md:h-screen md:flex-1/2 h-[40vh]"
        >
          <Placemark defaultGeometry={[50.983108, 39.480831]} />
        </Map>
        <div className="bg-brown-400 text-gold text-[24px] md:flex-1/2 md:h-screen flex h-[500px] items-center justify-center">
          <div className="flex flex-col gap-[24px]">
            <h2 className="text-[48px] font-bold">Контакты</h2>
            <p>
              Не нашли свой ответ?
              <br />
              Напишите нам
            </p>
            <p>
              +78214298912 <br /> (Whatsapp, Telegram) – <br /> Администратор
            </p>
            <p>
              Отвечам на заявки с<br /> 10:00 до 21:00
            </p>
            <div className="flex gap-[12px] text-[24px]">
              <FaTelegram />
              <FaWhatsapp />
              <FaVk />
            </div>
          </div>
        </div>
      </div>
    </YMaps>
  );
};

export default Contacts;
