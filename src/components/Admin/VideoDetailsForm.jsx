import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  addSubjectSubtopic,
  addSubjectTopic,
} from "../../redux/actions/siteInfo";
import {
  AdminContentHead,
  AdminContentLayout,
  ViewLayout,
} from "../../styles/components/AdminLayout";
import { Table } from "../../styles/components/MainTable.styled";
import { Form, FormGroup, Select } from "../../styles/utilities/Form.styled";
import ViewVideoTable from "./ViewVideoTable";

const VideoDetailsForm = () => {
  const { option } = useParams();

  const subjects = useSelector((state) => state.siteInfo.subjects);
  const dispatch = useDispatch();

  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const [topicName, setTopicName] = useState("");
  const [subtopicName, setSubtopicName] = useState("");
  const [subtopicLink, setSubtopicLink] = useState("");

  console.log(selectedSubject, selectedTopic);

  const subjectMap = {};
  for (let i = 0; i < subjects.length; i++) {
    subjectMap[subjects[i].name] = subjects[i];
  }

  const addTopic = (e) => {
    e.preventDefault();
    const topicData = { subject: selectedSubject, topic: topicName };
    dispatch(addSubjectTopic(topicData));
    window.location.reload();
  };

  const addSubtopic = (e) => {
    e.preventDefault();
    const subtopicData = {
      subject: selectedSubject,
      topic: selectedTopic,
      subtopic: subtopicName,
      subtopiclink: subtopicLink,
    };

    dispatch(addSubjectSubtopic(subtopicData));
    setSubtopicName("");
    setSubtopicLink("");
  };

  return (
    <Wrapper>
      {option === "add" && (
        <AdminContentLayout>
          <AdminContentHead>Add Video Details</AdminContentHead>
          <Form>
            <FormGroup>
              <label htmlFor="subject-select">Select Subject</label>
              <Select
                name="subject-select"
                id="subject-select"
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  subjectMap[selectedSubject] &&
                    subjectMap[selectedSubject].topics.length != 0 &&
                    setSelectedTopic("addnew");
                }}
                required
              >
                <option value="" disabled selected hidden>
                  Select Subject name...
                </option>
                {subjects.map((subject, index) => (
                  <option key={index} value={subject.name}>
                    {subject.name}
                  </option>
                ))}
              </Select>

              <label htmlFor="topic-select">Select Topic</label>
              <Select
                name="topic-select"
                id="topic-select"
                onChange={(e) => setSelectedTopic(e.target.value)}
                required
              >
                <option value="" disabled selected hidden>
                  Select Topic name...
                </option>
                {selectedSubject != "" &&
                  subjectMap[selectedSubject].topics.map((topic, index) => (
                    <option key={index} value={topic.topic}>
                      {topic.topic}
                    </option>
                  ))}
                {subjects.length > 0 && (
                  <option value="addnew">Add new topic</option>
                )}
              </Select>
            </FormGroup>

            {selectedTopic === "addnew" && (
              <FormGroup>
                <label htmlFor="topic-name">Topic Name</label>
                <input
                  type="text"
                  placeholder="Topic Name"
                  value={topicName}
                  onChange={(e) => setTopicName(e.target.value)}
                  id="topic-name"
                />
                <button onClick={addTopic}>Add Topic</button>
              </FormGroup>
            )}

            {selectedTopic !== "" && selectedTopic !== "addnew" && (
              <>
                <FormGroup>
                  <label htmlFor="subtopic-name">Subtopic Name</label>
                  <input
                    type="text"
                    placeholder="Subtopic Name"
                    value={subtopicName}
                    onChange={(e) => setSubtopicName(e.target.value)}
                    id="subtopic-name"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="subtopic-link">Subtopic Link</label>
                  <input
                    type="text"
                    placeholder="Subtopic Link"
                    value={subtopicLink}
                    onChange={(e) => setSubtopicLink(e.target.value)}
                    id="subtopic-link"
                  />
                </FormGroup>
                <button onClick={addSubtopic}>Add Subtopic</button>
              </>
            )}
          </Form>
        </AdminContentLayout>
      )}
      {option === "view" && <ViewVideoTable subjectMap={subjectMap} />}
    </Wrapper>
  );
};

export default VideoDetailsForm;

const Wrapper = styled.div``;
