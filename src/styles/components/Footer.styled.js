import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
  bottom: 0 !important;
`;
