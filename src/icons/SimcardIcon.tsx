
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const SimcardIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.54 6.53998L16.47 3.46997C15.53 2.52997 14.26 2.01001 12.93 2.01001H8C5 2.01001 3 4.01001 3 7.01001V17.01C3 20.01 5 22.01 8 22.01H16C19 22.01 21 20.01 21 17.01V10.08C21 8.74002 20.47 7.46998 19.54 6.53998Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 14L7.5 16L9.5 18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 14L16.5 16L14.5 18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default SimcardIcon;
