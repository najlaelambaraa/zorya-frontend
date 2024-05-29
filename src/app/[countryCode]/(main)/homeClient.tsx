// // components/HomeClient.tsx
// "use client";

// import React, { useState } from 'react';
// import Popup from '@modules/home/components/popup';
// import Carousel from '@modules/home/components/carousel';
// import FeaturedProducts from '@modules/home/components/featured-products';
// import ValeurHomeTemplate from '@modules/layout/templates/valeurs/Valeurs-Home';
// import StoryComponent from '@modules/home/components/story';
// import TitleComponent from '@modules/home/components/titleComponent';

// interface HomeClientProps {
//   collections: any;
//   region: any;
// }

// const HomeClient: React.FC<HomeClientProps> = ({ collections, region }) => {
//   const [showPopup, setShowPopup] = useState(false);

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   return (
//     <>
//       {/* <Hero /> */}
//       <Carousel />
//       <div className="py-12 bg-secondary">
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//           onClick={togglePopup}
//         >
//           Show Popup
//         </button>
//         <Popup show={showPopup} onClose={togglePopup}>
//           <h2 className="text-2xl font-bold">This is a popup!</h2>
//           <p className="mt-4">You can put any content you like here.</p>
//         </Popup>
//         <ul className="flex flex-col gap-x-6">
//           <FeaturedProducts collections={collections} region={region} />
//         </ul>
//         <ValeurHomeTemplate />
//         <StoryComponent
//           title={<TitleComponent title="NOTRE HISTOIRE" />}
//           altText="Notre histoire"
//           content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit lorem. Pellentesque et ante sapien. fringilla, mattis ligula consectetur, ultricies mauris. Maecenas vitae mattis tellus.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit lorem. Pellentesque et ante sapien. fringilla, mattis ligula consectetur, ultricies mauris. Maecenas vitae mattis tellus.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit lorem. Pellentesque et ante sapien. fringilla, mattis ligula consectetur, ultricies mauris. Maecenas vitae mattis tellus."
//           buttonText="En savoir plus"
//           buttonLink="/brand"
//           imageSrc="/public/"
//           reverse={false}
//         />
//       </div>
//     </>
//   );
// };

// export default HomeClient;
