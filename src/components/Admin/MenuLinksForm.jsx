import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiEdit2Line, RiDeleteBin5Line } from "react-icons/ri";

import {
  addNavLink,
  removeNavLink,
  updateFormData,
} from "../../redux/actions/siteInfo";
import {
  AdminContentHead,
  AdminContentLayout,
  ViewLayout,
} from "../../styles/components/AdminLayout";
import { Form, FormGroup } from "../../styles/utilities/Form.styled";
import { Table } from "../../styles/components/MainTable.styled";
import UpdateMenuForm from "./UpdateMenuForm";

const MenuLinksForm = () => {
  const { option } = useParams();

  const navlinks = useSelector((state) => state.siteInfo.navlinks);

  const [menuName, setMenuName] = useState("");
  const [menuLink, setMenuLink] = useState("");

  const [oldDetails, setOldDetails] = useState(null);

  const dispatch = useDispatch();

  const addMenu = (e) => {
    e.preventDefault();
    const navlink = { name: menuName, link: menuLink };
    console.log(navlink);
    dispatch(addNavLink(navlink));
    setMenuLink("");
    setMenuName("");
  };

  const removeMenu = (navlink) => {
    dispatch(removeNavLink(navlink));
  };

  return (
    <Wrapper>
      {option === "add" && (
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
                autoFocus
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
      {option === "view" && (
        <AdminContentLayout>
          <AdminContentHead center>View Menu List</AdminContentHead>
          <ViewLayout>
            {navlinks && (
              <Table>
                <thead>
                  <th>S.No</th>
                  <th>Navlink</th>
                  <th>Options</th>
                </thead>
                <tbody>
                  {navlinks &&
                    navlinks.map((navlink, index) => (
                      <tr key={navlink.link}>
                        <td>{index + 1}</td>
                        <td>
                          <a style={{ padding: 0 }} href={navlink.link}>
                            {navlink.name}
                          </a>
                        </td>
                        <td>
                          <div className="options">
                            <Link
                              style={{ padding: 0 }}
                              to="/admin/menus/update"
                            >
                              <RiEdit2Line
                                className="edit"
                                onClick={() => {
                                  setOldDetails(navlink);
                                }}
                              />
                            </Link>
                            <RiDeleteBin5Line
                              className="delete"
                              onClick={() => removeMenu(navlink)}
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
      {option === "update" && <UpdateMenuForm oldDetails={oldDetails} />}
    </Wrapper>
  );
};

export default MenuLinksForm;

const Wrapper = styled.div``;
