
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const CeloIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 16C18.866 16 22 12.866 22 9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9C8 12.866 11.134 16 15 16Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10"/>
</svg>

  );
};

export default CeloIcon;
