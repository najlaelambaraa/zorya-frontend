import React from 'react';

interface TitleComponentProps {
    title: string;
  }
const TitleComponent : React.FC<TitleComponentProps>= ({ title}) => {
  return (
    <div className="flex items-center justify-center text-4xl font-bold text-white py-8">
      <div className="flex-initial border-t-2 border-custom-border w-44"></div>
      <span className="px-4">{title}</span>
      <div className="flex-initial border-t-2 border-custom-border w-44"></div>
    </div>
  );
};

export default TitleComponent;
