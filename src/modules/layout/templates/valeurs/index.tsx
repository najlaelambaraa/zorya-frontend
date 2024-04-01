import React from 'react';
import Valeur from './valeur/index';
import modeFrance from '../../../../../src/assets/images/valeur_made_in_france.svg'; // Importez vos fichiers SVG ici
// Importez les autres SVG de la même manière

// Le composant App contrôle les données et les transmet aux composants enfants via les props
const ValeurTemplate = () => {
  // Chaque objet dans le tableau valeurs contient les props pour un composant Valeur
  const valeurs = [
    { svg: modeFrance, titre: 'SÉCURITÉ', texte: 'Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultricies mauris. Maecenas vitae mattis tellus. ' },
    { svg: modeFrance, titre: 'MOBILITE', texte: 'Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultricies mauris. Maecenas vitae mattis tellus.' },
    { svg: modeFrance, titre: 'INCLUSIVITE', texte: 'Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultricies mauris. Maecenas vitae mattis tellus.' },
    { svg: modeFrance, titre: 'MODE IN FRANCE', texte: 'Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultricies mauris. Maecenas vitae mattis tellus.' },
  
  ];

  return (
    <div className="App bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-white font-bold mb-8">NOS VALEURS</h1>
      <div className="flex flex-wrap justify-center items-start">
        {valeurs.map((valeur, index) => (
        
          <Valeur key={index} svg={valeur.svg} titre={valeur.titre} texte={valeur.texte} />
        ))}
      </div>
    </div>
  );
};

export default ValeurTemplate;
