import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import Logo from "../../assets/Univlogo.png";
import { Image } from "../../styles/components/Header.styled";
import { Button, Link } from "../../styles/utilities/Button.styled";
import { Flex } from "../../styles/utilities/Flex.styled";
// import { Link } from "react-router-dom";

const MainHeaderLogo = () => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <Flex layout="space-between">
        <div>
          <Image src={Logo} alt="" />
        </div>

        <ButtonGroup>
          <Button color={theme.colors.primary}>
            <Link color={theme.colors.primary} href="/login">
              Login
            </Link>
          </Button>
          <Button color={"white"} background={theme.colors.primary}>
            Register
          </Button>
        </ButtonGroup>
      </Flex>
    </Wrapper>
  );
};

export default MainHeaderLogo;

const Wrapper = styled.div`
  padding: 10px;
`;

const ButtonGroup = styled.div`
  margin-right: 2rem;
`;
