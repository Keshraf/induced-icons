
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const HeartCircleIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.33 17.45C12.15 17.51 11.84 17.51 11.66 17.45C10.1 16.92 6.59998 14.69 6.59998 10.91C6.59998 9.24 7.93998 7.89001 9.59998 7.89001C10.58 7.89001 11.45 8.36001 12 9.10001C12.54 8.37001 13.42 7.89001 14.4 7.89001C16.06 7.89001 17.4 9.24 17.4 10.91C17.4 14.69 13.9 16.92 12.33 17.45Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default HeartCircleIcon;
