import React from 'react';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import Thumbnail from 'modules/products/components/thumbnail';
import CustomButton from '../buttons/customButton';
import CustomImage from '../customImage';

export default function StoryComponent({
  title,
  altText,
  content,
  buttonText,
  buttonLink,
  imageSrc, 
  reverse,
}: {
  title: JSX.Element;
  altText: string;
  content: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  reverse: boolean;
}) {
  return (
    <LocalizedClientLink href={buttonLink} className="group">
    <div className={`flex flex-col ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center justify-center bg-secondary text-white pt-10`}>
      <CustomImage src={imageSrc} alt={altText} className="w-full sm:w-auto" />
      <div className="flex flex-col py-4 px-4 w-full sm:w-[660px] h-auto sm:h-[520px] justify-between"> 
        <div>
          <span className="px-4">{title}</span>
          <p>{content}</p>
        </div>
        <div>
          <CustomButton text={buttonText} /> 
        </div> 
      </div>
    </div>
  </LocalizedClientLink>
  
  
  );
}
