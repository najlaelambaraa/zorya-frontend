import React from "react";
import { IconProps } from "types/icon";

const Linkedin: React.FC<IconProps> = ({ fill = "#050507", className, ...attributes }) => {
  return (
    <svg
      id="Calque_1"
      data-name="Calque 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 136.19 136.19"
      width="50px"
      height="40px"
      fill={fill}
      className={className}
      {...attributes}
    >
      <path
        className="cls-1"
        d="M73.61,59.91c1.82-2.71,3.93-5.01,6.58-6.8,3.98-2.69,8.39-4.01,13.19-4.1,5.2-.1,10.27.45,14.95,2.94,5.43,2.88,8.34,7.67,9.95,13.41,1.27,4.54,1.72,9.21,1.75,13.89.08,13.19.03,26.37.06,39.56,0,.86-.19,1.14-1.1,1.13-6.47-.04-12.93-.05-19.4,0-1,0-1.15-.31-1.15-1.21.03-10.69.04-21.39,0-32.08-.01-3.62-.02-7.25-.88-10.82-1.51-6.24-5.92-8.43-11.81-7.92-7.74.67-9.96,5.71-10.82,11.14-.42,2.63-.49,5.29-.48,7.96,0,10.61,0,21.22.02,31.83,0,.95-.18,1.27-1.21,1.26-6.42-.05-12.85-.04-19.27,0-.85,0-1.14-.15-1.13-1.08.03-22.44.03-44.89,0-67.33,0-.79.14-1.09,1.02-1.08,6.21.04,12.42.04,18.64,0,.91,0,1.13.28,1.11,1.15-.05,2.72-.02,5.44-.02,8.16Z"
      />
      <path
        className="cls-1"
        d="M39.42,85.33c0,11.16-.02,22.32.03,33.48,0,1.08-.29,1.3-1.32,1.29-6.38-.05-12.76-.05-19.15,0-.96,0-1.17-.24-1.17-1.18.03-22.36.03-44.72,0-67.08,0-1.01.27-1.24,1.26-1.24,6.38.05,12.76.05,19.15,0,1.02,0,1.24.29,1.23,1.26-.03,11.16-.02,22.32-.02,33.48Z"
      />
      <path
        className="cls-2"
        d="M28.63,41.2c-6.87,0-12.51-5.65-12.52-12.57,0-6.9,5.65-12.55,12.54-12.53,6.83.02,12.47,5.67,12.49,12.49.01,6.89-5.66,12.6-12.51,12.61Z"
      />
    </svg>
  );
};

export default Linkedin;
