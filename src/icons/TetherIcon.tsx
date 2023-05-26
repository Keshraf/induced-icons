
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const TetherIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.46995 3.3501H16.53C17.59 3.3501 18.84 4.1201 19.31 5.0701L21.71 9.8901C22.29 11.0501 21.97 12.7001 21.02 13.5701L14.09 19.8601C12.94 20.9001 11.07 20.9001 9.91996 19.8601L2.98996 13.5701C2.02996 12.7001 1.71996 11.0501 2.29996 9.8901L4.69996 5.0701C5.15996 4.1201 6.40996 3.3501 7.46995 3.3501Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14.5V8.5" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 8.5H16" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default TetherIcon;
