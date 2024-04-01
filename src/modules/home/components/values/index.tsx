import React from 'react';

// Array of objects representing the values, with image and text for each
const values = [
  { id: 1, imgSrc: 'app/backgrond', text: 'Our first value' },
  { id: 2, imgSrc: '/path-to-your-second-image.png', text: 'Our second value' },
  { id: 3, imgSrc: '/path-to-your-third-image.png', text: 'Our third value' },
  // ...you can add more values as needed
];

const ValuesComponent = () => {
  return (
    <div className="flex justify-around items-center p-8">
      {values.map(value => (
        <div key={value.id} className="flex flex-col items-center text-center mx-4">
          <img src={value.imgSrc} alt={`Value ${value.id}`} className="w-32 h-32 object-cover rounded-lg mb-4" />
          <p className="text-base font-semibold">{value.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ValuesComponent;
