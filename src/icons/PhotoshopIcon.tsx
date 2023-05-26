
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const PhotoshopIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#17191C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 16V8H9.5C10.6 8 11.5 8.9 11.5 10C11.5 11.1 10.6 12 9.5 12H7.5" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 11H15.2C14.5 11 14 11.6 14 12.2C14 12.9 14.6 13.4 15.2 13.4C15.9 13.4 16.4 14 16.4 14.6C16.4 15.3 15.8 15.8 15.2 15.8H14" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default PhotoshopIcon;
