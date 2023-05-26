
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const BoxIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.17004 7.43994L12 12.5499L20.77 7.46991" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21.6099V12.5399" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.92999 2.48L4.59 5.45003C3.38 6.12003 2.39001 7.80001 2.39001 9.18001V14.83C2.39001 16.21 3.38 17.89 4.59 18.56L9.92999 21.53C11.07 22.16 12.94 22.16 14.08 21.53L19.42 18.56C20.63 17.89 21.62 16.21 21.62 14.83V9.18001C21.62 7.80001 20.63 6.12003 19.42 5.45003L14.08 2.48C12.93 1.84 11.07 1.84 9.92999 2.48Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 13.24V9.58002L7.51001 4.09998" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default BoxIcon;