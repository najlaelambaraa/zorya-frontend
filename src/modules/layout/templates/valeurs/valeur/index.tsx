import React from 'react';
import Icone from '../icone';
import { IconProps } from 'types/icon';
import react from 'react';

type ValeurProps = {
  Icone: React.ElementType;
  titre: string;
  texte: string;
};

const Valeur: React.FC<ValeurProps> = ({ Icone, titre, texte }) => {
  return (
    <div className="flex flex-col justify-evenly items-center px-4 py-2 sm:px-4 sm:py-4 m-2 text-center text-white w-[247px] h-[235px]">
    <Icone fill="#8FBF37" className="w-6 h-6 sm:w-8 sm:h-8" />
    <h3 className="mt-2 mb-4 text-base sm:text-lg font-bold">{titre}</h3>
    <p className="text-xs sm:text-sm">{texte}</p>
  </div>
  );
};

export default Valeur;
