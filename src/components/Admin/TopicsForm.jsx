import React, { useState } from "react";
import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addSubjectTopic } from "../../redux/actions/siteInfo";
import {
  AdminContentHead,
  AdminContentLayout,
  ViewLayout,
} from "../../styles/components/AdminLayout";
import { Table } from "../../styles/components/MainTable.styled";
import { Form, FormGroup, Select } from "../../styles/utilities/Form.styled";

const TopicsForm = () => {
  const { option } = useParams();

  const subjects = useSelector((state) => state.siteInfo.subjects);
  const dispatch = useDispatch();

  const [selectedSubject, setSelectedSubject] = useState("");
  const [topicName, setTopicName] = useState("");

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

  return (
    <Wrapper>
      {option === "add" && (
        <AdminContentLayout>
          <AdminContentHead>Add Topic</AdminContentHead>
          <Form>
            <FormGroup>
              <label htmlFor="subject-select">Select Subject</label>
              <Select
                name="subject-select"
                id="subject-select"
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
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
            </FormGroup>
            {selectedSubject != "" && (
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
          </Form>
        </AdminContentLayout>
      )}
      {option === "view" && (
        <AdminContentLayout>
          <AdminContentHead center>View Table</AdminContentHead>
          <Form>
            <FormGroup>
              <label htmlFor="subject-select">Select Subject</label>
              <Select
                name="subject-select"
                id="subject-select"
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
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
            </FormGroup>
          </Form>
          {subjectMap[selectedSubject] &&
            subjectMap[selectedSubject].topics &&
            subjectMap[selectedSubject].topics.length > 0 && (
              <ViewLayout>
                <Table center>
                  <thead>
                    <th>S.No</th>
                    <th>Topic</th>
                  </thead>
                  <tbody>
                    {subjectMap[selectedSubject].topics.map(
                      (topicItem, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{topicItem.topic}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
              </ViewLayout>
            )}
        </AdminContentLayout>
      )}
    </Wrapper>
  );
};

export default TopicsForm;

const Wrapper = styled.div``;
