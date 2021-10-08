import styled from "styled-components";

export const TableHeading = styled.h3`
  text-align: center;
  text-transform: uppercase;
  margin: 20px 0;
  color: #555;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: #333;
  font-size: 0.9rem;

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
