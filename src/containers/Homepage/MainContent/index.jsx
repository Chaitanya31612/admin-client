import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { MainTable, SideContentBar } from "../../../components/Homepage";

const MainContent = () => {
  const [subject, setSubject] = useState({});
  const [topic, setTopic] = useState(null);

  return (
    <Wrapper>
      <SideContentBar setSubject={setSubject} setTopic={setTopic} />
      <MainTable subject={subject} subjectTopic={topic} />
    </Wrapper>
  );
};

export default MainContent;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  min-height: 100vh;
`;
