import styled from "styled-components";

export const Button = styled.button`
  border: 1.3px solid
    ${(props) => props.borderColor || props.theme.colors.primary};

  font-weight: 500;
  outline: none;
  background-color: ${(props) => props.background || "#fff"};
  color: ${(props) => props.color || "#222"};
  padding: 9px 30px;
  border-radius: 5px;
  margin-right: 1rem;
  cursor: pointer;

  &:hover {
    /* transform: scale(0.98); */
  }
`;

export const Link = styled.a`
  color: ${(props) => props.color || "#222"};
  text-decoration: none;
  cursor: pointer;
`;
