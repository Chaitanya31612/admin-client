import styled from "styled-components";

export const Button = styled.button`
  border: 1.3px solid
    ${(props) => props.borderColor || props.theme.colors.primary};

  font-family: "Poppins";
  outline: none;
  background-color: ${(props) => props.background || "#fff"};
  color: ${(props) => props.color || "#222"};
  padding: 9px 20px;
  border-radius: 4px;
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
  padding: 1.1rem;
`;
