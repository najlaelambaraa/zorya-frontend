// pages/index.js
import TitleComponent from '@modules/home/components/titleComponent';
import { Card } from '../components/Card';

const Cards = () => {
  const articles = [
    {
      title: "TITRE DE L'ACTU",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      link: "#",
      alt: "image"
    },
    {
        title: "TITRE DE L'ACTU",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        link: "#",
        alt: "image"
      },
      {
        title: "TITRE DE L'ACTU",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... lorem lodskfjdsfjsjkfjkshfjkhsdjfhuezihrieqjdkjsdhjs",
        link: "#",
        alt: "image"
      },
      {
        title: "TITRE DE L'ACTU",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... Vous pouvez également utiliser des modificateurs de variantes pour cibler les requêtes multimédias telles que les points d'arrêt réactifs, le mode sombre, les préférences de mouvement réduit, etc. Par exemple, utilisez md:border-t-4pour appliquer l' border-t-4utilitaire uniquement sur des écrans de taille moyenne et supérieure. Vous pouvez également utiliser des modificateurs de variantes pour cibler les requêtes multimédias telles que les points d'arrêt réactifs, le mode sombre, les préférences de mouvement réduit, etc. Par exemple, utilisez md:border-t-4pour appliquer l' border-t-4utilitaire uniquement sur des écrans de taille moyenne et supérieure.",
        link: "#",
        alt: "image"
      },
      {
        title: "TITRE DE L'ACTU",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        link: "#",
        alt: "image"
      },
    
  ];

  return (
    <div className="container mx-auto p-4">
        <TitleComponent title="Le Blog" />
        <div className='flex items-center justify-center text-white'>
          <p className="sm:text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque totam beatae incidunt nesciunt enim debitis, expedita quasi quis rem aliquid in culpa illum fuga optio ducimus id laboriosam voluptates libero.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque unde ratione quae veritatis. Cupiditate velit numquam, nam earum veritatis nihil rem provident laborum beatae. Fugiat officiis quia veniam veritatis velit!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, aut reprehenderit non tempore, odit expedita numquam, hic incidunt modi inventore sequi nobis tenetur quas consequuntur quis quasi. Sunt, tempora fuga.
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
