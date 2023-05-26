
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const SortIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M6 12H18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M10 17H14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
</svg>

  );
};

export default SortIcon;
