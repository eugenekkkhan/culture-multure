import { useEffect, useRef, useState } from "react";
import { FaTelegram, FaVk, FaWhatsapp } from "react-icons/fa6";

const MAP_CENTER: [number, number] = [50.983108, 39.480831];
const YMAPS_SRC = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";

declare global {
  interface Window {
    ymaps?: {
      ready: (cb: () => void) => void;
      Map: new (
        el: HTMLElement,
        state: { center: [number, number]; zoom: number },
      ) => { geoObjects: { add: (obj: unknown) => void } };
      Placemark: new (geometry: [number, number]) => unknown;
    };
  }
}

let ymapsLoader: Promise<void> | null = null;

const loadYmaps = () => {
  if (!ymapsLoader) {
    ymapsLoader = new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = YMAPS_SRC;
      script.async = true;
      script.onload = () => window.ymaps!.ready(resolve);
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  return ymapsLoader;
};

const Contacts = () => {
  const [showMap, setShowMap] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mapRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!showMap || !mapRef.current) return;

    let cancelled = false;
    const container = mapRef.current;

    loadYmaps()
      .then(() => {
        if (cancelled || !window.ymaps) return;
        const map = new window.ymaps.Map(container, {
          center: MAP_CENTER,
          zoom: 15,
        });
        map.geoObjects.add(new window.ymaps.Placemark(MAP_CENTER));
      })
      .catch(() => {
        /* карта недоступна — блок остаётся пустым, контакты видны */
      });

    return () => {
      cancelled = true;
    };
  }, [showMap]);

  return (
    <div className="flex flex-col md:flex-row">
      <div ref={mapRef} className="md:h-screen md:flex-1/2 h-[40vh]" />
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
  );
};

export default Contacts;
