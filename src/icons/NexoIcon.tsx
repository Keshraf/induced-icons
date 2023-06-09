
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const NexoIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L17 3L22 6V18L17 21L7 15V9L17 15V9L12 6Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6L7 3L2 6V18L7 21L11.7 17.87" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default NexoIcon;
