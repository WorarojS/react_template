import React from "react";
import { SectionStyle } from "./style";
export const Section = (props) => {
  const { children, className, width, height, bgcolor } = props;
  return (
    <SectionStyle
      className={className}
      width={width}
      height={height}
      bgcolor={bgcolor}
    >
      {children}
    </SectionStyle>
  );
};
