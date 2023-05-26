
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const DashIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.0999 3.5H15.9999C19.9999 3.5 21.9999 6 21.9999 9.5V12C21.9999 17 18.9999 20.5 13.4999 20.5H3.8999L4.9999 16.2H12.3999C15.9999 16.2 17.6999 14 17.6999 10.9V10.7C17.6999 8.9 16.8999 7.7 14.6999 7.7H6.0999L7.0999 3.5Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 10.5H4.3C3.4 10.5 2.6 11.1 2.4 12L2 13.5H9.2C10.1 13.5 10.9 12.9 11.1 12L11.5 10.5Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default DashIcon;
