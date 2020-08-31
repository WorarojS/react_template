import React from "react";
import { DivStyle } from "./style";

export const DivWrapper = (props) => {
  const { children, className, width, height, padding, margin } = props;
  return (
    <DivStyle
      className={className}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
    >
      {children}
    </DivStyle>
  );
};
