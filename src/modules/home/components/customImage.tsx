
interface CustomImageProps {
  src: string;   
  alt: string;   
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt }) => {
  return (
    <div className="sm:w-[565px] w-[300px] h-[425px] bg-white">
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full text-black"
      />
    </div>
  );
};

export default CustomImage;
