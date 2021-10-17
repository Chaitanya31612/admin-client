import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { RiEdit2Line, RiDeleteBin5Line } from "react-icons/ri";

import {
  AdminContentHead,
  AdminContentLayout,
  ViewLayout,
} from "../../styles/components/AdminLayout";
import { Form, FormGroup } from "../../styles/utilities/Form.styled";
import { Table } from "../../styles/components/MainTable.styled";
import { addSubject, removeSubject } from "../../redux/actions/siteInfo";
import UpdateSubjectForm from "./UpdateSubjectForm";

const SubjectsForm = () => {
  const { option } = useParams();

  const subjects = useSelector((state) => state.siteInfo.subjects);

  const dispatch = useDispatch();

  const [subject, setSubject] = useState("");
  const [oldDetails, setOldDetails] = useState(null);

  const addSubjectName = (e) => {
    e.preventDefault();

    dispatch(
      addSubject({
        sno: subjects[subjects.length - 1].sno + 1 || subjects.length + 1,
        name: subject,
        topics: [],
      })
    );
    setSubject("");
  };

  const removeSubjectName = (subject) => {
    dispatch(removeSubject(subject));
  };

  return (
    <Wrapper>
      {option === "add" && (
        <AdminContentLayout>
          <AdminContentHead>Add Subject</AdminContentHead>
          <Form>
            <FormGroup>
              <label htmlFor="subject-name">Subject Name</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                id="subject-name"
                autoFocus
              />
            </FormGroup>
            <button onClick={addSubjectName}>Submit</button>
          </Form>
        </AdminContentLayout>
      )}
      {option === "view" && (
        <AdminContentLayout>
          <AdminContentHead center>View Subjects</AdminContentHead>
          <ViewLayout>
            {subjects && (
              <Table>
                <thead>
                  <th>S.No</th>
                  <th>Subject</th>
                  <th>Options</th>
                </thead>
                <tbody>
                  {subjects.map((subject, index) => (
                    <tr key={subject.sno}>
                      <td>{index + 1}</td>
                      <td>{subject.name}</td>
                      <td>
                        <div className="options">
                          <Link
                            style={{ padding: 0 }}
                            to="/admin/subject/update"
                          >
                            <RiEdit2Line
                              className="edit"
                              onClick={() => {
                                setOldDetails(subject);
                              }}
                            />
                          </Link>
                          <RiDeleteBin5Line
                            className="delete"
                            onClick={() => removeSubjectName(subject)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </ViewLayout>
        </AdminContentLayout>
      )}
      {option === "update" && <UpdateSubjectForm oldDetails={oldDetails} />}
    </Wrapper>
  );
};

export default SubjectsForm;

const Wrapper = styled.div``;
