import styled from "styled-components";

export const TableHeading = styled.h3`
  text-align: center;
  text-transform: uppercase;
  margin: 20px 0;
  color: #555;
`;

export const TableSubHeading = styled.h4`
  text-align: center;
  text-decoration: underline;
  margin: 20px 0;
  color: #888;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: ${(props) => props.center ? "60%" : "100%"};;
  color: #333;
  font-size: 0.9rem;
  margin-left: ${(props) => props.center ? "auto" : 0};
  margin-right: ${(props) => props.center ? "auto" : 0};

  td,
  th {
    border: 1px solid #ccc;
    text-align: left;
    padding: 10px;
  }

  th,
  tr:nth-child(even) {
    background-color: #eee;
  }
`;
