import styled from "styled-components";

export const DateTime = styled.div``;

export const PageLink = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.lightGrey};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Search = styled.div`
  input {
    border-radius: 10px;
    border: none;
    padding: 3px;
    padding-left: 6px;
  }
`;

export const LinksMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
`;

export const Image = styled.img`
  width: 10;
  object-fit: cover;
  margin-left: 10px;
`;

export const FontSize = styled.div`
  span {
    margin-right: 15px;
    cursor: pointer;
  }
`;
