import styled from "styled-components";

export const AdminContentHead = styled.p`
  color: #777;
  font-size: 2.5rem;
  font-weight: lighter;
  margin-bottom: 1.5rem;
`;

export const AdminContentLayout = styled.div`
  padding: 2rem 3rem;
`;

export const ViewLayout = styled.div`
  a {
    display: block;
    padding-bottom: 1rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.lightBlue};
    }
  }
`;
