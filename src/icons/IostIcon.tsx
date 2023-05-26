
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const IostIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 2.60005L4.5 6.40005C3.9 6.80005 3.5 7.40005 3.5 8.10005V15.8C3.5 16.5 3.9 17.2 4.5 17.5L11 21.3C11.6 21.7 12.4 21.7 13 21.3L19.5 17.5C20.1 17.1 20.5 16.5 20.5 15.8V8.10005C20.5 7.40005 20.1 6.70005 19.5 6.40005L13 2.60005C12.4 2.20005 11.6 2.20005 11 2.60005Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 9L12 6L7 9L17 15L12 18L7 15" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 10L9.5 12" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 12L12.5 14" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default IostIcon;
