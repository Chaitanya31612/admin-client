import styled from "styled-components";

export const SideBarHeading = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  svg {
    margin-top: 1rem;
    cursor: pointer;
  }
  p {
    text-decoration: underline;
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const SubjectList = styled.ul`
  list-style-type: none;
`;

export const SubjectListItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;
