import React, { useState } from "react";
import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import swal from "sweetalert";
import {
  addSubjectTopic,
  removeTopic,
  updateFormData,
} from "../../redux/actions/siteInfo";
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
    console.log(topicData);
    dispatch(addSubjectTopic(topicData));
    window.location.reload();
  };

  const removeTopicName = (selectedSubject, selectedTopic) => {
    const removeTopicData = { subject: selectedSubject, topic: selectedTopic };
    dispatch(removeTopic(removeTopicData));
  };

  const updateTopicName = (e, selectedTopic) => {
    e.preventDefault();
    // console.log(selectedTopic);
    swal({
      text: "Enter Topic Name",
      content: "input",
      button: {
        text: "Update",
        closeModel: false,
      },
    })
      .then((updatedTopicName) => {
        if (!updatedTopicName) throw null;

        const updatedTopicData = {
          subject: selectedSubject,
          oldTopicName: selectedTopic,
          newTopicName: updatedTopicName,
          type: "topic",
        };

        dispatch(updateFormData(updatedTopicData));
      })
      .catch((err) => {
        if (err) {
          swal("Oh noes!", "The update request failed!", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
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
          <AdminContentHead center>View Topics</AdminContentHead>
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
                    <th>Options</th>
                  </thead>
                  <tbody>
                    {subjectMap[selectedSubject].topics.map(
                      (topicItem, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{topicItem.name}</td>
                          <td>
                            <div className="options">
                              <RiEdit2Line
                                className="edit"
                                onClick={(e) =>
                                  updateTopicName(e, topicItem.name)
                                }
                              />
                              <RiDeleteBin5Line
                                className="delete"
                                onClick={() =>
                                  removeTopicName(
                                    selectedSubject,
                                    topicItem.name
                                  )
                                }
                              />
                            </div>
                          </td>
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
