import React from 'react';
import Valeur from './valeur/index';
import MadeFrance from '@modules/common/icons/madeFrance';
import MOBILITE from '@modules/common/icons/mobilité';
import Inclusivite from '@modules/common/icons/inclusivite';
import Securite from '@modules/common/icons/securite';
import { logCustomerIn } from '@modules/account/actions';
import TitleComponent from '@modules/home/components/titleComponent';
import MOBILITEHOME from '@modules/common/icons/mobilite-home';
import SecuriteHome from '@modules/common/icons/securite-home';
import InclusiviteHome from '@modules/common/icons/inclusivite-home';



const ValeurHomeTemplate = () => {
  const valeurs = [
    { Icone: SecuriteHome, titre: 'SÉCURITÉ', texte: 'La sécurité par la visibilité ! Des tenues phosphorescentes pour des runs nocturnes sans danger ' },
    { Icone: MOBILITEHOME, titre: 'MOBILITÉ', texte: 'Le confort avant tout  ! Des tenues de sport conçues pour une liberté de mouvement' },
    { Icone: InclusiviteHome, titre: 'INCLUSIVITÉ', texte: 'L’esprit sportif et solidaire ! Des tenues sportives, offrant confort et modernité à toutes et tous, sans exception.' },
  
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-primary min-h-screen">
    <div className="flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black py-8">
      <span className="px-2 sm:px-6 md:px-6 lg:px-6">Nos valeurs</span>
    </div>
    <div className="grid sm:grid-cols-3 gap-4 justify-center items-center w-full sm:w-[936px] max-w-full px-4 sm:px-0 pb-20 text-black mt-8 sm:mt-0">
      {valeurs.map((valeur, index) => (
        <Valeur key={index} Icone={valeur.Icone} titre={valeur.titre} texte={valeur.texte} />
      ))}
    </div>
  </div>
  

  
  );
};

export default ValeurHomeTemplate;
