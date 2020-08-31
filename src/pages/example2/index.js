import React from "react";
import { Section, Flex, Text } from "../../components";
import { Container } from "reactstrap";
const Example2 = () => {
  return (
    <Section width="100vw" height="100vh" bgcolor="secondary">
      <Container>
        <Flex alignItems="center" justifyContent="center" height="100vh">
          <Text.H4 fontColor="primary" margin="0 1em">
            H4
          </Text.H4>
          <Text.H3 fontColor="white" margin="0 1em">
            H3
          </Text.H3>
          <Text.H1 fontColor="grey" margin="0 1em">
            H1
          </Text.H1>
        </Flex>
      </Container>
    </Section>
  );
};

export default Example2;
