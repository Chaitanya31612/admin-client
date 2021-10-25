import React, { useState } from "react";
import styled from "styled-components";
// import { subjects } from "../../../helpers/data";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import {
  SideBarHeading,
  SubjectList,
  SubjectListItem,
} from "../../../styles/components/SideContentBar.styled";

const SideContentBar = ({ setSubject, setTopic }) => {
  const subjects = useSelector((state) => state.siteInfo.subjects);
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <Wrapper>
      <SideBarHeading>
        <IoChevronBackCircleSharp onClick={() => window.location.reload()} />
        <p>Subjects</p>
      </SideBarHeading>

      {selectedSubject === null ? (
        <SubjectList>
          {subjects.map((subject) => (
            <SubjectListItem
              onClick={() => {
                setSubject(subject);
                setSelectedSubject(subject);
              }}
              key={subject.id}
            >
              {subject.name}
            </SubjectListItem>
          ))}
        </SubjectList>
      ) : (
        <SubjectList>
          {selectedSubject.topics.map((topic) => (
            <SubjectListItem
              onClick={() => {
                setTopic(topic);
              }}
              key={topic.id}
            >
              {topic.topic}
            </SubjectListItem>
          ))}
        </SubjectList>
      )}
    </Wrapper>
  );
};

export default SideContentBar;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey || "#eee"};
  text-align: center;
  flex: 1;
`;
