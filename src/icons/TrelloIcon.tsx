
import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const TrelloIcon = (props: IconProps) => {
  return (
    <svg {...props}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.54988 17.72H7.09988C6.42988 17.72 5.87988 17.17 5.87988 16.5V7.51004C5.87988 6.84004 6.42988 6.29004 7.09988 6.29004H9.54988C10.2199 6.29004 10.7699 6.84004 10.7699 7.51004V16.49C10.7699 17.17 10.2199 17.72 9.54988 17.72Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M17.1397 13.63H14.1997C13.6597 13.63 13.2197 13.19 13.2197 12.65V7.27004C13.2197 6.73004 13.6597 6.29004 14.1997 6.29004H17.1397C17.6797 6.29004 18.1197 6.73004 18.1197 7.27004V12.66C18.1297 13.19 17.6797 13.63 17.1397 13.63Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
</svg>

  );
};

export default TrelloIcon;
