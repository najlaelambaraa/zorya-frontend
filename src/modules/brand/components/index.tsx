import ActionButton from "@modules/home/components/buttons/actionButton";
import CustomButton from "../../home/components/buttons/customButton";
import CustomImage from "../../home/components/customImage";
import TitleComponent from "../../home/components/titleComponent";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

interface BrandSectionProps {
  title: string;
  content: React.ReactNode;
  buttonText: string;
  imageSrc: string;
  altText: string;
  buttonLink: string;
}

const BrandSection: React.FC<BrandSectionProps> = ({ title, content, buttonText, imageSrc, altText, buttonLink }) => {
  return (
    <LocalizedClientLink href={buttonLink} className="group">
<div className="content-container py-12 sm:py-24 bg-bg" id="nosProduits">
  <TitleComponent title={title} />
  <div className="flex flex-col sm:flex-row sm:justify-center justify-between text-white p-4 sm:p-12">
    <div className="flex-1 flex flex-col justify-between p-4 sm:p-12"> 
      <p>{content}</p> 
      
    </div>
    
      <CustomImage src={imageSrc} alt={altText} />
   
  </div>
  <div className="flex sm:justify-center mt-4 sm:mt-0">
    <ActionButton text={buttonText} />
  </div>
</div>
    </LocalizedClientLink>

  );
};

export default BrandSection;
