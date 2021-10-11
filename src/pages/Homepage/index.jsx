import React, { useEffect } from "react";
import styled from "styled-components";

import { MainHeader, MainContent, MainFooter } from "../../containers/Homepage";

const Homepage = () => {
  return (
    <Wrapper>
      <MainHeader />
      <MainContent />
      <MainFooter />
    </Wrapper>
  );
};

export default Homepage;

const Wrapper = styled.div`
  background-color: #fff;
`;
