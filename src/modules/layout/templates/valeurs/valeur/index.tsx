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
    <div className="flex flex-col justify-evenly items-center px-4 py-2 sm:px-4 sm:py-4 m-2 text-center w-[247px] h-[235px]">
    <Icone fill="#8FBF37" width="32" height="32" className="sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" />
    <h3 className="mt-2 mb-4 text-base sm:text-2xl font-bold">{titre}</h3>
    <p className="text-sm sm:text-base">{texte}</p>
  </div>
  );
};

export default Valeur;
