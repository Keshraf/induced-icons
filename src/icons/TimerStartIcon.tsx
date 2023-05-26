
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const TimerStartIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V13" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 2H15" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.9 18.5V17.34C14.9 15.91 15.92 15.32 17.16 16.04L18.16 16.62L19.16 17.2C20.4 17.92 20.4 19.09 19.16 19.81L18.16 20.39L17.16 20.97C15.92 21.69 14.9 21.1 14.9 19.67V18.5Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default TimerStartIcon;
