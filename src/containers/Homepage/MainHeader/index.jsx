import React from "react";
import styled from "styled-components";
import {
  Accessibility,
  Links,
  MainHeaderLogo,
} from "../../../components/Homepage";

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
