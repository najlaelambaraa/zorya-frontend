// pages/index.js
import TitleComponent from '@modules/home/components/titleComponent';
import { Card } from '../components/Card';

// Composant Cards qui représente la page de blog
const Cards = () => {
  // Liste d'articles avec leurs titres, contenus, liens d'images et descriptions alternatives
  const articles = [
    {
      title: "Qu'est-ce que la phosphorescence ?",
      content: "La phosphorescence est un phénomène lumineux fascinant qui se produit lorsque certains matériaux absorbent la lumière naturelle ou artificielle, puis la rediffuse lentement dans l'obscurité.",
      link: "/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1716661773176-coureur%20de%20nuit%202.jpg&w=3840&q=50",
      alt: "phosphorescent phosphorescence vetement de sport homme gilet haut visibilité gilets haute visibilité veste haute visibilité  gilet haute visibilité survetement de sport vetement haute magasin vetement de sport visibilité gilets haute visibilité site de vetement de sport magasin de vetement de sport magasin vetement de sport"
    },
    {
        title: "Comment bien choisir sa tenue",
        content: "Bien choisir sa tenue de sport est essentiel pour améliorer ses performances, son confort et sa sécurité. Voici quelques conseils pour vous aider à sélectionner la tenue de sport idéale.",
        link: "/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1716499714610-mockup%20haut%20de%20compression.jpg&w=3840&q=50",
        alt: "phosphorescent phosphorescence vetement de sport homme veste haute visibilité  gilet haute visibilité survetement de sport vetement haute magasin vetement de sport visibilité phosphorescent peinture  gilets haute visibilité site de vetement de sport magasin de vetement de sport magasin vetement de sport"
      },
      {
        title: "Comment allier running nocturne",
        content: "La visibilité est un élément clé du running nocturne. Il est important de prendre certaines précautions pour assurer votre sécurité et votre visibilité dans l’obscurité.",
        link: "/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1716659375142-mockup%20t-shirt%20noir%20sur%20ciel%20bleu.jpg&w=3840&q=50",
        alt: "phosphorescent phosphorescence vetement de sport homme gilet haut visibilité gilets haute visibilité veste haute visibilité gilet haute visibilité survetement de sport vetement haute magasin vetement de sport visibilité gilets haute visibilité site de vetement de sport magasin de vetement de sport magasin  vetement de sport"
      },

  ];

  return (
    <div className="container mx-auto p-4">
      {/* Composant de titre pour la page */}
        <TitleComponent title="Le Blog" />
        <div className='flex items-center justify-center text-white'>
          <p className="sm:text-center">
          Explorez l'univers lumineux de Zorya ! <br></br>
      Découvrez nos articles de blog qui vous éclairent sur des tendances en matière de vêtements de sport, des conseils pour choisir la tenue parfaite  pour vos sessions de running nocturne 
et bien plus encore !
          </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:p-20">
        {articles.map((article, index) => (
          <Card
                key={index}
                title={article.title}
                content={article.content}
                link={article.link} alt={article.alt}          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
