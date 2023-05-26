
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const TextUnderlineIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21H19" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 3V10C5 13.87 8.13 17 12 17C15.87 17 19 13.87 19 10V3" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default TextUnderlineIcon;
