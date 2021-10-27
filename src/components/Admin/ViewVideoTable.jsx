import React, { useState } from "react";
import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
// import swal from "sweetalert";
import { removeSubtopic, updateFormData } from "../../redux/actions/siteInfo";
import {
  AdminContentHead,
  AdminContentLayout,
  ViewLayout,
} from "../../styles/components/AdminLayout";
import { Table } from "../../styles/components/MainTable.styled";
import { Form, FormGroup, Select } from "../../styles/utilities/Form.styled";

const ViewVideoTable = ({ subjectMap }) => {
  const dispatch = useDispatch();
  const subjects = useSelector((state) => state.siteInfo.subjects);

  const [selectedSubject, setSelectedSubject] = useState("");

  const [selectedTopic, setSelectedTopic] = useState("");

  const updateSubtopicName = async (e, selectedTopic, subtopic) => {
    e.preventDefault();
    const { value: formValues } = await Swal.fire({
      title: "Update Values",
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Subtopic Name">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Subtopic Link">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
        ];
      },
    });

    if (formValues) {
      console.log(formValues);
      const updatedTopicData = {
        subject: selectedSubject,
        topic: selectedTopic,
        subtopic,
        newSubtopicData: { name: formValues[0], link: formValues[1] },
        type: "subtopic",
      };

      dispatch(updateFormData(updatedTopicData));
    }
  };

  const removeSubtopicName = (selectedSubject, selectedTopic, subtopic) => {
    const removeSubtopicData = {
      subject: selectedSubject,
      topic: selectedTopic,
      subtopic: subtopic,
    };
    dispatch(removeSubtopic(removeSubtopicData));
  };

  return (
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
                <option key={index} value={topic.name}>
                  {topic.name}
                </option>
              ))}
          </Select>
        </FormGroup>
      </Form>
      {selectedSubject &&
        selectedTopic &&
        subjectMap[selectedSubject] &&
        subjectMap[selectedSubject].topics &&
        subjectMap[selectedSubject].topics.length > 0 && (
          <ViewLayout>
            <Table>
              <thead>
                <th>S.No</th>
                <th>Sub Topic</th>
                <th>Video Link</th>
                <th>Options</th>
              </thead>
              <tbody>
                {subjectMap[selectedSubject].topics
                  .find((topic) => topic.name === selectedTopic)
                  .subtopics.map((subtopic, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{subtopic.name}</td>
                      <td>
                        <a href={subtopic.link}>{subtopic.link}</a>
                      </td>
                      <td>
                        <div className="options">
                          <RiEdit2Line
                            className="edit"
                            onClick={(e) => {
                              updateSubtopicName(e, selectedTopic, subtopic);
                            }}
                          />
                          <RiDeleteBin5Line
                            className="delete"
                            onClick={() =>
                              removeSubtopicName(
                                selectedSubject,
                                selectedTopic,
                                subtopic
                              )
                            }
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </ViewLayout>
        )}
    </AdminContentLayout>
  );
};

export default ViewVideoTable;
