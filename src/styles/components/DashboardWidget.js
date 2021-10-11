import styled from "styled-components";
import { Flex } from "../utilities/Flex.styled";

export const DashboardHeadGroup = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  button {
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.lightPrimary1};
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightPrimary};
    }
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  /* grid-template-areas:
    "card card"
    "activity card"
    "activity card"; */

  span {
    grid-row: 2 / -1;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h6 {
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 10px;
    color: #42688e;
    font-weight: bolder;
  }

  p {
    font-size: 2.7rem;
    font-weight: lighter;
  }
`;

export const IconLogo = styled.div`
  color: #ddd;
  font-size: 2rem;
  margin-right: 1rem;
`;
