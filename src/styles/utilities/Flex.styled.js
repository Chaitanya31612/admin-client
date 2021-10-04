import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.layout || "initial"};

  /* & > div,
  & > ul {
    flex: 1;
  } */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
