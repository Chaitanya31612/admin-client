import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AdminContentHead,
  AdminContentLayout,
  ViewLayout,
} from "../../styles/components/AdminLayout";
import { Table } from "../../styles/components/MainTable.styled";
import { Form, FormGroup, Select } from "../../styles/utilities/Form.styled";

const ViewVideoTable = ({ subjectMap }) => {
  const subjects = useSelector((state) => state.siteInfo.subjects);

  const [selectedSubject, setSelectedSubject] = useState("");

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
        </FormGroup>
      </Form>
      {subjectMap[selectedSubject] &&
        subjectMap[selectedSubject].topics &&
        subjectMap[selectedSubject].topics.length > 0 && (
          <ViewLayout>
            <Table>
              <thead>
                <th>S.No</th>
                <th>Topic</th>
                <th>Sub Topic</th>
                <th>Video Link</th>
              </thead>
              <tbody>
                {subjectMap[selectedSubject].topics.map((topicItem, index) =>
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
                      <td>{topicItem.name}</td>
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
    </AdminContentLayout>
  );
};

export default ViewVideoTable;
