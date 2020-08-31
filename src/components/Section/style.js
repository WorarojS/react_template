import styled from "styled-components";

export const SectionStyle = styled.div`
  background: ${(props) => props.theme.color[props.bgcolor]};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
