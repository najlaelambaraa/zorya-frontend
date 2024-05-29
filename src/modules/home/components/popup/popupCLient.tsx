"use client";

import React, { useEffect, useState } from "react";
import Popup from ".";
import Logo from "@modules/common/icons/logo";
import CustomImage from "../customImage";

const PopupClient: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 15000); 
    return () => clearTimeout(timer); 
}, []);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
    {/* <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      onClick={togglePopup}
    >
      Show Popup
    </button> */}
    <Popup show={showPopup} onClose={closePopup}>
      <div className="flex text-white">
        <div className="md:w-1/2">
     
          <img
        src="/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1716659375142-mockup%20t-shirt%20noir%20sur%20ciel%20bleu.jpg&w=3840&q=50"
        alt="Glowish Logo"
        className="w-full h-full object-cover"
            />
        </div>
        <div className="w-1/2 p-4 flex flex-col justify-between items-center m-7">
          <Logo />
          <h1 className="text-3xl font-bold my-4">Rejoignez- la Glowshère !</h1>
          <p className="mt-4">
              Abonnez-vous pour recevoir des nouveautES et astuces glowing chaque mois !
                    </p>
          <div className="my-4">
          <input
              type="text"
              className="border-2 border-primary rounded-xl px-2 text-white bg-bg w-full h-10 mb-2"
              placeholder="nom"
            />
            <input
              type="text"
              className="border-2 border-primary rounded-xl px-2 text-white bg-bg w-full h-10 mb-2"
              placeholder="prénom"
            />
            <input
              type="email"
              className="border-2 border-primary rounded-xl px-2 text-white bg-bg w-full h-10 mb-2"
              placeholder="E-mail"
            />
            <button className="bg-primary text-black font bold rounded-xl px-4 py-2 w-full">
            Rejoindre la Glowpshère
            </button>
          </div>
          {/* <p className="text-xs">Découvrez en avant-première nos actualités, offres spéciales et événements en vous inscrivant à notre newsletter dès maintenant !</p> */}
        </div>
      </div>
    </Popup>
  </>
  );
};

export default PopupClient;
