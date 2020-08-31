import React from "react";
import { FlexStyle } from "./style";

export const Flex = (props) => {
  const {
    children,
    className,
    flexDirection,
    justifyContent,
    alignItems,
    margin,
    padding,
    width,
    height,
  } = props;
  return (
    <FlexStyle
      className={className}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
    >
      {children}
    </FlexStyle>
  );
};
