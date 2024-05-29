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
    <div className="flex flex-col justify-evenly items-center px-4 py-2 sm:px-4 sm:py-4 m-2 text-center">
      <div className='h-[130px]'>
      <Icone fill="#8FBF37" className="sm:w-full sm:h-full md:w-64 md:h-full lg:w-full lg:h-full" />
      </div>
      <div className='h-[30px] w-[247px]'>
      <h3 className="text-base sm:text-2xl font-bold">{titre}</h3>
      </div>
      <div className='h-[30px] pt-2 w-[247px]'>
      <p className="text-sm sm:text-base">{texte}</p>
      </div>    
  </div>
  );
};

export default Valeur;
