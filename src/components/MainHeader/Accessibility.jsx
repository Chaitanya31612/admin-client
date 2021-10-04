import React, { useContext } from "react";
import styled from "styled-components";
import {
  DateTime,
  FontSize,
  PageLink,
  Search,
} from "../../styles/components/Header.styled";

import { ThemeContext } from "styled-components";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Accessibility = () => {
  const date = new Date();
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <DateTime>
        {(date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
          "/" +
          monthNames[date.getMonth()] +
          "/" +
          date.getFullYear()}{" "}
        | {date.toLocaleTimeString()}
      </DateTime>

      <PageLink>
        <a href="#main">Skip to Main Content &darr;</a>
      </PageLink>

      <FontSize>
        <span onClick={theme.decreaseFont}>A-</span>
        <span onClick={theme.resetFont}>A</span>
        <span onClick={theme.increaseFont}>A+</span>
      </FontSize>

      <Search>
        <input type="search" placeholder="Search" />
      </Search>

      <PageLink>
        <a href="#site-map">Site Map</a>
      </PageLink>
    </Wrapper>
  );
};

export default Accessibility;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightGrey};
  padding: 1.1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
