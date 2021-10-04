import React from "react";
import styled from "styled-components";
import Accessibility from "../../../components/MainHeader/Accessibility";
import Links from "../../../components/MainHeader/Links";
import MainHeaderLogo from "../../../components/MainHeader/MainHeaderLogo";

const MainHeader = () => {
  return (
    <Wrapper>
      <Accessibility />
      <MainHeaderLogo />
      <Links />
    </Wrapper>
  );
};

export default MainHeader;

const Wrapper = styled.div``;
