
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const LampIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.79011 14.69H18.2101C19.8701 14.69 20.8701 13.38 20.4401 11.78L18.2401 3.71C17.9801 2.77 16.9701 2 16.0101 2H7.99011C7.03011 2 6.02011 2.77 5.77011 3.7L3.57011 11.77C3.13011 13.38 4.13011 14.69 5.79011 14.69Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15V22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 22H16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default LampIcon;
