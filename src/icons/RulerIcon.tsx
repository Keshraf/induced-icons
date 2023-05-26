
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const RulerIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3195_645)">
<path d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M18 7V12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M6 7V11" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M10.05 7L10 12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M14 7V10" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
</g>
<defs>
<clipPath id="clip0_3195_645">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

  );
};

export default RulerIcon;
