
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const PolygonIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12.1L7.5 14.7L3 12.1V6.90005L7.5 4.30005L12 6.90005V8.50005" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12.1L16.5 9.5L21 12.1V17.3L16.5 19.9L12 17.3V15.6" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default PolygonIcon;
