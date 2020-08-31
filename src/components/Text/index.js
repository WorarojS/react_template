import React from "react";
import PropTypes from "prop-types";
import {
  TextH1Style,
  TextH2Style,
  TextH3Style,
  TextH4Style,
  TextH5Style,
  TextH6Style,
} from "./style";

const H1Style = ({
  children,
  className,
  margin,
  padding,
  fontColor,
  weight,
  textAlign,
}) => {
  return (
    <TextH1Style
      className={className}
      margin={margin}
      padding={padding}
      fontColor={fontColor}
      weight={weight}
      textAlign={textAlign}
    >
      {children}
    </TextH1Style>
  );
};

const H2Style = ({
  children,
  className,
  margin,
  padding,
  fontColor,
  weight,
  textAlign,
}) => {
  return (
    <TextH2Style
      className={className}
      margin={margin}
      padding={padding}
      fontColor={fontColor}
      weight={weight}
      textAlign={textAlign}
    >
      {children}
    </TextH2Style>
  );
};

const H3Style = ({
  children,
  className,
  margin,
  padding,
  fontColor,
  weight,
  textAlign,
}) => {
  return (
    <TextH3Style
      className={className}
      margin={margin}
      padding={padding}
      fontColor={fontColor}
      weight={weight}
      textAlign={textAlign}
    >
      {children}
    </TextH3Style>
  );
};

const H4Style = ({
  children,
  className,
  margin,
  padding,
  fontColor,
  weight,
  textAlign,
}) => {
  return (
    <TextH4Style
      className={className}
      margin={margin}
      padding={padding}
      fontColor={fontColor}
      weight={weight}
      textAlign={textAlign}
    >
      {children}
    </TextH4Style>
  );
};

const H5Style = ({
  children,
  className,
  margin,
  padding,
  fontColor,
  weight,
  textAlign,
}) => {
  return (
    <TextH5Style
      className={className}
      margin={margin}
      padding={padding}
      fontColor={fontColor}
      weight={weight}
      textAlign={textAlign}
    >
      {children}
    </TextH5Style>
  );
};

const H6Style = ({
  children,
  className,
  margin,
  padding,
  fontColor,
  weight,
  textAlign,
}) => {
  return (
    <TextH6Style
      className={className}
      margin={margin}
      padding={padding}
      fontColor={fontColor}
      weight={weight}
      textAlign={textAlign}
    >
      {children}
    </TextH6Style>
  );
};

export const Text = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

const propTypes = {
  padding: PropTypes.string,
  margin: PropTypes.string,
  fontColor: PropTypes.string,
  weight: PropTypes.number,
  textAlign: PropTypes.string,
  children: PropTypes.node,
  cursor: PropTypes.string,
};

const defaultProps = {
  fontColor: "black",
  textAlign: "left",
  margin: "0",
  padding: "0",
  weight: 400,
  children: null,
  cursor: null,
};

H1Style.defaultProps = defaultProps;
H2Style.defaultProps = defaultProps;
H3Style.defaultProps = defaultProps;
H4Style.defaultProps = defaultProps;
H5Style.defaultProps = defaultProps;
H6Style.defaultProps = defaultProps;

H1Style.propTypes = propTypes;
H2Style.propTypes = propTypes;
H3Style.propTypes = propTypes;
H4Style.propTypes = propTypes;
H5Style.propTypes = propTypes;
H6Style.propTypes = propTypes;

Text.H1 = H1Style;
Text.H2 = H2Style;
Text.H3 = H3Style;
Text.H4 = H4Style;
Text.H5 = H5Style;
Text.H6 = H6Style;
