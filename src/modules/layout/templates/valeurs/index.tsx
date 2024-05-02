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
    { Icone: Securite, titre: 'SÉCURITÉ', texte: 'Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultricies mauris. Maecenas vitae mattis tellus. ' },
    { Icone: MOBILITE, titre: 'MOBILITE', texte: 'Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultricies mauris. Maecenas vitae mattis tellus.' },
    { Icone: Inclusivite, titre: 'INCLUSIVITE', texte: 'Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultricies mauris. Maecenas vitae mattis tellus.' },
  
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-bg h-[369px]">
    <TitleComponent title='NOS VALEURS'/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center gap-3.5 w-[936px] h-[235px]">
      {valeurs.map((valeur, index) => (
        <Valeur key={index} Icone={valeur.Icone} titre={valeur.titre} texte={valeur.texte} />
      ))}
    </div>
  </div>
  
  );
};

export default ValeurTemplate;
