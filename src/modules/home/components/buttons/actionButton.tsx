
interface CustomButtonProps {
  text: string;

  className?: string;   
}

const ActionButton: React.FC<CustomButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`bg-primary text-black py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 w-[174px] h-[46px] text-base ${className || ''}`}
    
    >
      {text}
    </button>
  );
};

export default ActionButton;
