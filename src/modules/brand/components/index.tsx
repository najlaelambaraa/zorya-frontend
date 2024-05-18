import ActionButton from "@modules/home/components/buttons/actionButton";
import CustomButton from "../../home/components/buttons/customButton";
import CustomImage from "../../home/components/customImage";
import TitleComponent from "../../home/components/titleComponent";

interface BrandSectionProps {
  title: string;
  content: string;
  buttonText: string;
  imageSrc: string;
  altText: string;
}

const BrandSection: React.FC<BrandSectionProps> = ({ title, content, buttonText, imageSrc, altText }) => {
  return (
   
<div className="content-container py-12 sm:py-24 bg-bg" id="nosProduits">
  <TitleComponent title={title} />
  <div className="flex flex-col sm:flex-row sm:justify-center justify-between text-white p-4 sm:p-12">
    <div className="flex-1 flex flex-col justify-between p-4 sm:p-12"> 
      <p>{content}</p> 
      
    </div>
    
      <CustomImage src={imageSrc} alt={altText} />
   
  </div>
  <div className="flex sm:justify-center mt-4 sm:mt-0">
    <ActionButton text={buttonText}  />
  </div>
</div>
  );
};

export default BrandSection;
