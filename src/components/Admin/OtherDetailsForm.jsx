import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  AdminContentHead,
  AdminContentLayout,
  ViewLayout,
} from "../../styles/components/AdminLayout";
import { Form, FormGroup } from "../../styles/utilities/Form.styled";
import { Table } from "../../styles/components/MainTable.styled";
import { updateOtherDetails } from "../../redux/actions/siteInfo";

const OtherDetailsForm = () => {
  const { option } = useParams();

  const footer = useSelector((state) => state.siteInfo.footer);
  const univLogoLink = useSelector((state) => state.siteInfo.univLogo);

  const dispatch = useDispatch();

  const [footerText, setFooterText] = useState(footer);
  const [univLogo, setUnivLogo] = useState(univLogoLink);

  const updateOthers = (e) => {
    e.preventDefault();

    const updateData = { footer: footerText, univLogo: univLogo };
    dispatch(updateOtherDetails(updateData));
  };

  return (
    <Wrapper>
      {option === "add" && (
        <AdminContentLayout>
          <AdminContentHead>Add Other Details</AdminContentHead>
          <Form>
            <FormGroup>
              <label htmlFor="footer">Footer Text</label>
              <textarea
                type="text"
                value={footerText || footer}
                onChange={(e) => setFooterText(e.target.value)}
                id="footer"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="univlogo">University Logo</label>
              <textarea
                type="text"
                value={univLogo || univLogoLink}
                onChange={(e) => setUnivLogo(e.target.value)}
                id="univlogo"
              />
            </FormGroup>
            <button onClick={updateOthers}>Submit</button>
          </Form>
        </AdminContentLayout>
      )}
      {option === "view" && (
        <AdminContentLayout>
          <AdminContentHead center>View Details</AdminContentHead>
          <ViewLayout>
            {/* {subjects && (
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
                          <RiEdit2Line className="edit" />
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
            )} */}
          </ViewLayout>
        </AdminContentLayout>
      )}
    </Wrapper>
  );
};

export default OtherDetailsForm;

const Wrapper = styled.div``;
