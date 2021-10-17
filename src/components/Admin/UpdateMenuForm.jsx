import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { updateFormData } from "../../redux/actions/siteInfo";
import {
  AdminContentHead,
  AdminContentLayout,
} from "../../styles/components/AdminLayout";
import { Form, FormGroup } from "../../styles/utilities/Form.styled";

const UpdateMenuForm = ({ oldDetails }) => {
  const [updateName, setUpdateName] = useState(
    oldDetails ? oldDetails.name : ""
  );
  const [updateLink, setUpdateLink] = useState(
    oldDetails ? oldDetails.link : ""
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const updateMenu = (e) => {
    e.preventDefault();

    const updateDetails = {
      oldDetails,
      newDetails: { name: updateName, link: updateLink },
      type: "menu",
    };

    dispatch(updateFormData(updateDetails));
  };
  return (
    <AdminContentLayout>
      <AdminContentHead>Update Menu</AdminContentHead>
      <Form>
        <FormGroup>
          <label htmlFor="menu-name">Menu Name</label>
          <input
            type="text"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
            id="menu-name"
            autoFocus
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="menu-link">Menu Link</label>
          <input
            type="text"
            value={updateLink}
            onChange={(e) => setUpdateLink(e.target.value)}
            id="menu-link"
          />
        </FormGroup>
        <button onClick={updateMenu}>Update</button>
        <a href="/admin/menus/view">View Menu list</a>
      </Form>
    </AdminContentLayout>
  );
};

export default UpdateMenuForm;
