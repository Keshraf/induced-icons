
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const MoreSquareIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.9965 12H16.0054" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9955 12H12.0045" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.99451 12H8.00349" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default MoreSquareIcon;
