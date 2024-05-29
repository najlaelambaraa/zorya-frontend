import React from 'react';
import Valeur from './valeur/index';
import MadeFrance from '@modules/common/icons/madeFrance';
import MOBILITE from '@modules/common/icons/mobilité';
import Inclusivite from '@modules/common/icons/inclusivite';
import Securite from '@modules/common/icons/securite';
import { logCustomerIn } from '@modules/account/actions';
import TitleComponent from '@modules/home/components/titleComponent';



const ValeurTemplate = () => {
  const valeurs = [
    { Icone: Securite, titre: 'SÉCURITÉ', texte: 'La sécurité par la visibilité ! Des tenues phosphorescentes pour des runs nocturnes sans danger ' },
    { Icone: MOBILITE, titre: 'MOBILITÉ', texte: 'Le confort avant tout ! Des tenues de sport conçues pour une liberté de mouvement ' },
    { Icone: Inclusivite, titre: 'INCLUSIVITÉ', texte: 'L’esprit sportif et solidaire ! Des tenues sportives, offrant confort et modernité à toutes et tous, sans exception.' },
  
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-bg min-h-screen"> 
    <TitleComponent title="NOS VALEURS" />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:w-full max-w-6xl px-4 pb-20 text-white">
      {valeurs.map((valeur, index) => (
        <Valeur key={index} Icone={valeur.Icone} titre={valeur.titre} texte={valeur.texte} />
      ))}
    </div>
  </div>

  
  );
};

export default ValeurTemplate;
