import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// import { examLinks } from "../../../helpers/data";
import { LinksMenu } from "../../../styles/components/Header.styled";
import { MenuLink } from "../../../styles/utilities/Button.styled";

const Links = () => {
  const navlinks = useSelector((state) => state.siteInfo.navlinks);

  return (
    <Wrapper>
      <LinksMenu>
        {navlinks.map((exam, index) => (
          <MenuLink
            target="_blank"
            key={index}
            color={"white"}
            href={exam.link}
          >
            {exam.name}
          </MenuLink>
        ))}
      </LinksMenu>
    </Wrapper>
  );
};

export default Links;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightGrey};

  a:hover {
    background-color: ${({ theme }) => theme.colors.darkPrimary};
  }
`;
