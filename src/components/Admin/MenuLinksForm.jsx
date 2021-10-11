import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { addNavLink } from "../../redux/actions/siteInfo";
import {
  AdminContentHead,
  AdminContentLayout,
  ViewLayout,
} from "../../styles/components/AdminLayout";
import { Form, FormGroup } from "../../styles/utilities/Form.styled";

const MenuLinksForm = () => {
  const { option } = useParams();

  const navlinks = useSelector((state) => state.siteInfo.navlinks);

  const [menuName, setMenuName] = useState("");
  const [menuLink, setMenuLink] = useState("");

  const dispatch = useDispatch();

  const addMenu = async (e) => {
    e.preventDefault();
    const navlink = { name: menuName, link: menuLink };
    console.log(navlink);
    dispatch(addNavLink(navlink));
    setMenuLink("");
    setMenuName("");
    await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/admin/addnavlink`,
      navlink
    );
  };

  return (
    <Wrapper>
      {option === "addmenu" && (
        <AdminContentLayout>
          <AdminContentHead>Add Menu</AdminContentHead>
          <Form>
            <FormGroup>
              <label htmlFor="menu-name">Menu Name</label>
              <input
                type="text"
                placeholder="Menu Name"
                value={menuName}
                onChange={(e) => setMenuName(e.target.value)}
                id="menu-name"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="menu-link">Menu Link</label>
              <input
                type="text"
                placeholder="Menu Link"
                value={menuLink}
                onChange={(e) => setMenuLink(e.target.value)}
                id="menu-link"
              />
            </FormGroup>
            <button onClick={addMenu}>Submit</button>
          </Form>
        </AdminContentLayout>
      )}
      {option === "viewmenus" && (
        <AdminContentLayout>
          <AdminContentHead>View Menu List</AdminContentHead>
          <ViewLayout>
            {navlinks &&
              navlinks.map((navlink, index) => (
                <a href={navlink.link}>{navlink.name}</a>
              ))}
          </ViewLayout>
        </AdminContentLayout>
      )}
    </Wrapper>
  );
};

export default MenuLinksForm;

const Wrapper = styled.div``;
