import React from "react";
import { useHistory } from "react-router-dom";
import { Section, Flex, Text, Button } from "../../components";
import { Container } from "reactstrap";

const Home = () => {
  const history = useHistory();
  return (
    <Section height="100vh" bgcolor="primary">
      <Container>
        <Flex
          height="100vh"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text.H1>HOME</Text.H1>
          <Button
            size="sm"
            color="primary"
            onClick={() => history.push("./example2")}
          >
            to example2
          </Button>
        </Flex>
      </Container>
    </Section>
  );
};

export default Home;
