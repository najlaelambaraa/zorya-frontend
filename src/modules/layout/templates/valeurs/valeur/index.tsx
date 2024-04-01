import React from 'react';
import Icone from '../icone';

type ValeurProps = {
  svg: string;
  titre: string;
  texte: string;
};

const Valeur: React.FC<ValeurProps> = ({ svg, titre, texte }) => {
  return (
    <div className="flex flex-col items-center p-4 m-2 text-center bg-gray-800 text-white rounded-lg">
      <Icone svg={svg} />
      <h3 className="mt-2 mb-4 text-lg font-semibold">{titre}</h3>
      <p className="text-sm">{texte}</p>
    </div>
  );
};

export default Valeur;
