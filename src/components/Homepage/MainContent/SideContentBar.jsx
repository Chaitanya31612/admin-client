import React from "react";
import styled from "styled-components";
// import { subjects } from "../../../helpers/data";
import { useSelector } from "react-redux";
import {
  SideBarHeading,
  SubjectList,
  SubjectListItem,
} from "../../../styles/components/SideContentBar.styled";

const SideContentBar = ({ subject, setSubject }) => {
  const subjects = useSelector((state) => state.siteInfo.subjects);

  return (
    <Wrapper>
      <SideBarHeading>Subjects</SideBarHeading>

      <SubjectList>
        {subjects.map((subject) => (
          <SubjectListItem onClick={() => setSubject(subject)} key={subject.id}>
            {subject.name}
          </SubjectListItem>
        ))}
      </SubjectList>
    </Wrapper>
  );
};

export default SideContentBar;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey || "#eee"};
  text-align: center;
  flex: 1;
`;
