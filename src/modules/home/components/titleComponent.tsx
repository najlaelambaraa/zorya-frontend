import React from 'react';

interface TitleComponentProps {
  title: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center text-xl sm:text-3xl md:text-4xl font-bold text-white py-2 sm:py-4 md:py-8">
      <div className="flex-initial border-t-2 border-custom-border w-12 sm:w-24 md:w-32 lg:w-32"></div>
      <span className="px-2">{title}</span>
      <div className="flex-initial border-t-2 border-custom-border w-12 sm:w-24 md:w-32 lg:w-32"></div>
    </div>
  );
};

export default TitleComponent;

