import React from "react";

import styled from "styled-components";
import MainHeader from "../../containers/Homepage/MainHeader";

const Homepage = () => {
  return (
    <Container>
      <MainHeader />
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  background-color: #fff;
`;
