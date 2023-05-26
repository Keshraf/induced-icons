
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const EmercoinIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M7.5 8H16.5V16H7.5" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 12H12.5V8" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default EmercoinIcon;
