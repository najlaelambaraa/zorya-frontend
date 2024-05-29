import CustomButton from "@modules/home/components/buttons/customButton";

type CardProps = {
  title: string;
  content: string;
  link: string;
  alt: string;
};
// Composant Card avec des props pour le titre, le contenu, le lien de l'image et la description alternative
export const Card: React.FC<CardProps> = ({ title, content, link, alt }) => {
  return (
    <div className="bg-black shadow-lg pt-10 h-[438px] transition duration-300 transform hover:scale-105 hover:shadow-2xl">
          {/* Affichage de l'image de l'article */}
    <img src={link} alt={alt} className="w-full h-48 object-cover mb-4"/>
    <div className="p-4 border-2 border-primary">
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-base mb-4 line-clamp-3">{content}</p>
        {/* Bouton personnalisé pour lire l'article */}
        <CustomButton text={"Lire l'actualité"}/>
    </div>
</div>

  );
};
