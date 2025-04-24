import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const Contacts = () => {
  return (
    <YMaps>
      <div className="flex h-screen">
        <Map
          defaultState={{
            center: [50.98703823670383, 39.49773129647022],
            zoom: 15,
          }}
          className='h-screen flex-1/2'
        >
          <Placemark defaultGeometry={[50.98703823670383, 39.49773129647022]} />
        </Map>
        <div className="bg-brown-400 text-gold flex-1/2">Контакты</div>
      </div>
    </YMaps>
  );
};

export default Contacts;
