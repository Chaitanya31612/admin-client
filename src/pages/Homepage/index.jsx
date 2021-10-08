import React from "react";

import styled from "styled-components";
import MainFooter from "../../containers/Homepage/Footer";
import MainContent from "../../containers/Homepage/MainContent";
import MainHeader from "../../containers/Homepage/MainHeader";

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
