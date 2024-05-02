import React from 'react';

// Définition de l'interface pour les props
interface CustomButtonProps {
  text: string;
 // Vous pouvez préciser d'autres types si nécessaire, par exemple (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string;   // Prop optionnelle pour les classes CSS supplémentaires
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`bg-primary text-black py-3 px-6 rounded-full hover:bg-slate-200 focus:outline-none focus:ring-2 focus:bg-slate-200 focus:ring-opacity-50 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 w-[151px] h-[46px] text-base ${className || ''}`}
    
    >
      {text}
    </button>
  );
};

export default CustomButton;
