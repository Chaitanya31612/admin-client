import React, { useState } from "react";
import styled from "styled-components";
import MainTable from "../../../components/MainContent/MainTable";
import SideContentBar from "../../../components/MainContent/SideContentBar";

const MainContent = () => {
  const [subject, setSubject] = useState({});

  return (
    <Wrapper>
      <SideContentBar subject={subject} setSubject={setSubject} />
      <MainTable subject={subject} />
    </Wrapper>
  );
};

export default MainContent;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
