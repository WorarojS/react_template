import styled, { css } from "styled-components";

const defaultStyle = css`
  width: ${(props) => props.width};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.weight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${(props) => props.theme.color[props.fontColor]};
  cursor: ${(props) => props.cursor};
  text-decoration: ${(props) => props.decoration};
  font-family: ${(props) => props.fontFamily};
`;

export const TextH1Style = styled.h1`
  ${defaultStyle};
  font-size: ${(props) => props.theme.fontSize.xLarge};
`;

export const TextH2Style = styled.h2`
  ${defaultStyle};
  font-size: ${(props) => props.theme.fontSize.large};
`;

export const TextH3Style = styled.h3`
  ${defaultStyle};
  font-size: ${(props) => props.theme.fontSize.medium};
`;
export const TextH4Style = styled.h4`
  ${defaultStyle};
  font-size: ${(props) => props.theme.fontSize.small};
`;
export const TextH5Style = styled.h5`
  ${defaultStyle};
  font-size: ${(props) => props.theme.fontSize.default};
`;
export const TextH6Style = styled.h6`
  ${defaultStyle};
  font-size: ${(props) => props.theme.fontSize.xSmall};
`;

export const TextCustomStyle = styled.span`
  ${defaultStyle};
  font-size: ${(props) => props.theme.fontSize[props.size]};
  cursor: ${(props) => props.onClick && "pointer"};
`;
