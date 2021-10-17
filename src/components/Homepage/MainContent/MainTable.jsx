import React from "react";
import styled from "styled-components";
import { ViewLayout } from "../../../styles/components/AdminLayout";
import {
  Table,
  TableHeading,
} from "../../../styles/components/MainTable.styled";
import { Container } from "../../../styles/utilities/Container.styled";

const MainTable = ({ subject: { id, name, topics } }) => {
  return (
    <Wrapper id="main">
      <Container>
        <TableHeading>{name}</TableHeading>

        {/* {console.log(topics, id, name)} */}
        {name && topics && topics.length > 0 && (
          <ViewLayout>
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
                  topics.map((topicItem, index) =>
                    topicItem.subtopics.map((subtopic) => (
                      <tr
                        style={
                          index % 2 !== 0
                            ? { backgroundColor: "#eee" }
                            : { backgroundColor: "#F9F9F9" }
                        }
                        key={topicItem.sno}
                      >
                        <td>{index + 1}</td>
                        <td>{topicItem.topic}</td>
                        <td>{subtopic.name}</td>
                        <td>
                          <a href={subtopic.link}>{subtopic.link}</a>
                        </td>
                      </tr>
                    ))
                  )}
              </tbody>
            </Table>
          </ViewLayout>
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
