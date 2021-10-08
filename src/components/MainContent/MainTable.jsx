import React from "react";
import styled from "styled-components";
import { Table, TableHeading } from "../../styles/components/MainTable.styled";
import { Container } from "../../styles/utilities/Container.styled";

const MainTable = ({ subject: { id, name, topics } }) => {
  return (
    <Wrapper id="main">
      <Container>
        <TableHeading>{name}</TableHeading>

        {/* {console.log(topics, id, name)} */}
        {name && (
          <Table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Topic</th>
                <th>Sub Topic</th>
                <th>Video Link</th>
              </tr>
            </thead>
            <tbody>
              {topics &&
                topics.length > 0 &&
                topics.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.topic}</td>
                    <td>{id}</td>
                    <td>{id}</td>
                    {/* {subtopics && subtopics.map(({ subitem: { name, link } }) => (
                  
                ))} */}
                  </tr>
                ))}
            </tbody>
          </Table>
        )}
      </Container>
    </Wrapper>
  );
};

export default MainTable;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey1};
  flex: 4;
`;
