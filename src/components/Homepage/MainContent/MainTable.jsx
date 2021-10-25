import React from "react";
import styled from "styled-components";
import { ViewLayout } from "../../../styles/components/AdminLayout";
import {
  Table,
  TableHeading,
  TableSubHeading,
} from "../../../styles/components/MainTable.styled";
import { Container } from "../../../styles/utilities/Container.styled";

const MainTable = ({ subject, subjectTopic }) => {
  return (
    <Wrapper id="main">
      <Container>
        <TableHeading>{subject.name}</TableHeading>

        {subjectTopic !== null && (
          <>
            <TableSubHeading>{subjectTopic.name}</TableSubHeading>
            {subject.name && subjectTopic && subjectTopic.subtopics.length > 0 && (
              <ViewLayout>
                <Table>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Sub Topic</th>
                      <th>Video Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjectTopic.subtopics &&
                      subjectTopic.subtopics.length > 0 &&
                      subjectTopic.subtopics.map((subtopic, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{subtopic.name}</td>
                          <td>
                            <a href={subtopic.link}>{subtopic.link}</a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </ViewLayout>
            )}
          </>
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
