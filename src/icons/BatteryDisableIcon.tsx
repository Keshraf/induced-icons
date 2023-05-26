
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const BatteryDisableIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 21.5L16 2.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 5C3 5 2 6 2 10V14C2 17.4 2.72 18.63 5.39 18.92" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 19C17 19 18 18 18 14V9.99996C18 6.60996 17.28 5.36996 14.63 5.07996" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default BatteryDisableIcon;
