import styled from "styled-components";

export const Form = styled.form`
  label {
    padding-right: 2rem;
    color: #333;
  }

  input {
    display: block;
    padding: 10px 15px;
    border: none;
    outline-color: ${({ theme }) => theme.colors.lightBlue};
    width: 15rem;
    border-radius: 6px;
  }

  button {
    margin-top: 3rem;
    padding: 10px 2rem;
    outline-color: ${({ theme }) => theme.colors.darkBlue};
    border: 0.5px ${({ theme }) => theme.colors.lightBlue} solid;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  padding-top: 2rem;
  align-items: center;
`;
