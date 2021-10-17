import styled from "styled-components";

export const Form = styled.form`
  display: table;

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
    margin-left: 1.5rem;
    padding: 10px 2rem;
    outline-color: ${({ theme }) => theme.colors.darkBlue};
    /* border: 0.5px ${({ theme }) => theme.colors.lightBlue} solid; */
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    &:hover {
      background-color: #fbfbfb;
    }
  }

  a {
    display: block;
    padding-left: 2rem;
    padding-top: 2rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.lightBlue};
    }
  }
`;

export const FormGroup = styled.div`
  display: table-row;
  /* display: flex; */
  padding-top: 2rem;
  align-items: center;
  /* justify-content: center; */

  label {
    display: table-cell;
    padding: 1.5rem;
  }

  textarea {
    display: table-cell;
    width: 30rem;
  }
`;

export const Select = styled.select`
  padding: 5px;

  &:invalid {
    color: grey;
  }
`;
