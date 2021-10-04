import React from "react";
import styled from "styled-components";
import { examLinks } from "../../helpers/data";
import { LinksMenu } from "../../styles/components/Header.styled";
import { Link } from "../../styles/utilities/Button.styled";

const Links = () => {
  return (
    <Wrapper>
      <LinksMenu>
        {examLinks.map((exam, index) => (
          <Link key={index} color={"white"} to="/">
            {exam}
          </Link>
        ))}
      </LinksMenu>
    </Wrapper>
  );
};

export default Links;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightGrey};
  padding: 1.1rem;
`;
