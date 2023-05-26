
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const MenuIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M3 12H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M3 17H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
</svg>

  );
};

export default MenuIcon;
