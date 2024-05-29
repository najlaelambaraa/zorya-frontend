import React from 'react';

export default function LegalMentions() {
  return (
    <>
      <div className="bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg">
          <div className="p-4">
            <h1 className="font-bold text-4xl">Mentions Légales</h1>
            <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : 25 mai 2024</p>

            <h2 className="font-bold text-2xl">1. Éditeur du Site</h2>
            <p>Le site web Zorya est édité par :</p>
            <ul className="list-disc list-inside">
              <li>Nom de l'entreprise : Zorya</li>
              <li>Adresse : [Adresse de l'entreprise]</li>
              <li>Téléphone : 06 71 60 43 05</li>
              <li>E-mail : gregoire14.delarue@gmail.com</li>
              <li>Directeur de la publication : [Nom du directeur de publication]</li>
            </ul>

            <h2 className="font-bold text-2xl">2. Hébergement</h2>
            <p>Le site web Zorya est hébergé par :</p>
            <ul className="list-disc list-inside">
              <li>Nom de l'hébergeur : [Nom de l'hébergeur]</li>
              <li>Adresse de l'hébergeur : </li>
              <li>Téléphone de l'hébergeur : </li>
            </ul>

            <h2 className="font-bold text-2xl">3. Propriété Intellectuelle</h2>
            <p>Tout le contenu présent sur le site Zorya, y compris les textes, images, logos et graphismes ...</p>

            <h2 className="font-bold text-2xl">4. Données Personnelles</h2>
            <p>Zorya s'engage à protéger la confidentialité de vos données personnelles. Pour plus d'informations sur la collecte et l'utilisation de vos données personnelles, veuillez consulter notre Politique de Confidentialité.</p>

            <h2 className="font-bold text-2xl">5. Cookies</h2>

            <h2 className="font-bold text-2xl">6. Litiges</h2>

            <h2 className="font-bold text-2xl">7. Contact</h2>
            <p>Pour toute question ou demande d'information concernant les mentions légales, vous pouvez nous contacter à l'adresse e-mail suivante : gregoire14.delarue@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
