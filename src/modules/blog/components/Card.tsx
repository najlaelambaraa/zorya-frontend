import CustomButton from "@modules/home/components/buttons/customButton";

type CardProps = {
  title: string;
  content: string;
  link: string;
  alt: string;
};

export const Card: React.FC<CardProps> = ({ title, content, link, alt }) => {
  return (
    <div className="bg-gray-800 text-white shadow-lg border-2 border-primary w-[300px] h-[438px]">
    <img src={link} alt={alt} className="w-full h-48 object-cover mb-4 bg-white"/>
    <div className="p-4">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-300 text-base mb-4 line-clamp-3">{content}</p>
    <CustomButton text={"Lire l'actualité"}/>
  </div>
</div>

  );
};
