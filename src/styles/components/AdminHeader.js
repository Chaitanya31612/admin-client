import styled from "styled-components";

export const StyledAdminHeader = styled.div``;

export const ProfileDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 5;
  cursor: pointer;

  p {
    margin-left: 3rem;
    margin-right: 10px;
    align-self: stretch;
  }
`;

export const Header = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  input {
    background-color: #f5f5f5;
    border-radius: 8px;
    border: none;
    padding: 8px 2rem;
    outline-color: #eee;
  }
`;

export const Icon = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.7;
  font-size: 1.3rem;
  cursor: pointer;
`;
