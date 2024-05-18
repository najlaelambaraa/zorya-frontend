import React from "react";
import { IconProps } from "types/icon";

const Picto: React.FC<IconProps> = ({ fill, className }) => {
  return (
    <svg
      id="Calque_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 175.04 174.97"
      className={className}
      height="50px"
      width="50px"
    >
      <g id="Calque_1-2">
        <path
          fill="#bccf2c"
          d="M174.92,0s-19.98,40-63.12,43.9C88.52,31.71,45.56,17.89,0,46.97c0,0,44.63-2.7,69.57,32.71,1.08,26.25,10.6,70.38,58.56,95.3,0,0-24.65-37.3-6.46-76.61,22.2-14.07,55.65-44.36,53.25-98.36Z"
        />
      </g>
    </svg>
  );
};

export default Picto;
