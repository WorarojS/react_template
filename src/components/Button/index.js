import React from "react";
import { ButtonStyle } from "./style";

export const Button = (props) => {
  const { children, className, color, size, onClick, outline } = props;
  return (
    <ButtonStyle
      outline={outline && outline}
      className={className}
      size={size}
      onClick={onClick}
      color={color}
    >
      {children}
    </ButtonStyle>
  );
};
