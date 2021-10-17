import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { updateFormData } from "../../redux/actions/siteInfo";
import {
  AdminContentHead,
  AdminContentLayout,
} from "../../styles/components/AdminLayout";
import { Form, FormGroup } from "../../styles/utilities/Form.styled";

const UpdateSubjectForm = ({ oldDetails }) => {
  const [updateName, setUpdateName] = useState(
    oldDetails ? oldDetails.name : ""
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const updateSubject = (e) => {
    e.preventDefault();

    const updateDetails = {
      oldDetails,
      newDetails: { name: updateName },
      type: "subject",
    };

    dispatch(updateFormData(updateDetails));
  };
  return (
    <AdminContentLayout>
      <AdminContentHead>Update Subject</AdminContentHead>
      <Form>
        <FormGroup>
          <label htmlFor="subject-name">Subject Name</label>
          <input
            type="text"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
            id="subject-name"
            autoFocus
          />
        </FormGroup>
        <button onClick={updateSubject}>Update</button>
        <a href="/admin/subject/view">View Subject list</a>
      </Form>
    </AdminContentLayout>
  );
};

export default UpdateSubjectForm;
