
interface CustomImageProps {
  src: string;   
  alt: string;   
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt }) => {
  return (
    <div className="w-[660px] h-[520px] bg-white">
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default CustomImage;
