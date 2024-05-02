import React from "react";
import { IconProps } from "types/icon";

const Logo: React.FC<IconProps> = ({ fill, className }) => {
  // Supprimez les balises <defs> et <style> car vous allez passer les styles via props
  return (
    <svg
      id="Calque_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 971.82 195.59"
      className={className} // Appliquez className ici pour permettre la personnalisation du style externe
    >
      <g id="Calque_1-2">
        <path
          d="M880.49,12.94l-121.97-.14c3.15,21.91.25,49.15-20.65,75.69,0,0,8.2-50.8-35.55-75.69h-264.59v49.29C425.05,14.72,379.37,0,325.06,0c-46.14.11-86.24,10.62-105,42.88V12.94H0v53.95h112.12L0,129.08v54.1h220.06v-30.5c18.76,32.22,58.86,42.81,105,42.91,54.13-.11,99.99-14.69,112.68-61.84v49.33h66.37v-41.58h59.28l32.04,41.58,189.56.11,13.43-29.13h85.23l13.43,29.13h74.75L880.49,12.94ZM182.34,120.64c-33.9-6.07-60.69,16.34-60.69,16.34,19.77-51.4,65.63-62.54,88.45-64.82-.91,5.82-1.37,12.13-1.33,18.86v13.6c-.04,13.85,1.93,25.77,5.68,35.97-7.54-10.55-19.21-17.63-32.11-19.95ZM330.53,119.86c-29.17,23.31-24.54,61.6-24.54,61.6-27.38-37.65-17.74-75.31-8.48-95.99-5.61-36.92-41.05-52.03-41.05-52.03,46.31-4.87,74.08,22.26,87.33,40.63,34.78,13.6,65.59-9.54,65.59-9.54-18.9,42.53-56.3,53.01-78.85,55.32ZM595.33,87.44c-2.8,2.77-6.21,4.17-10.27,4.17h-80.95v-29.03h80.95c8.1,0,14.58,6.49,14.58,14.58,0,3.93-1.4,7.36-4.31,10.27ZM671.89,181.46l-39.83-45.37c44.24-24.61,36.25-75.69,36.25-75.69,46.03,59,3.58,121.06,3.58,121.06ZM817.67,112.5l23.42-50.27,23.31,50.27h-46.73Z"
          fill={fill || "#bccf2c"} // Utilisez la prop fill ou une valeur par défaut
          // Supprimez les autres styles inutilisés et les attributs, comme strokeWidth, ici
        />
      </g>
    </svg>
  );
};

export default Logo;
