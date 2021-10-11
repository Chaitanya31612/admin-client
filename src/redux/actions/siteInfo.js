import { SETACTIVESUBJECT, SETSITEDETAILS, ADDNAVLINK } from "../actions/types";
import axios from "axios";
import { useDispatch } from "react-redux";

// const dispatch = useDispatch();

export const setActiveSubject = (subject) => {
  return { type: SETACTIVESUBJECT, payload: subject };
};

export const setSiteDetails = (siteDetails) => {
  return { type: SETSITEDETAILS, payload: siteDetails };
};

export const addNavLink = async (navlink) => {
  await axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/admin/addnavlink`,
    navlink
  );
  return { type: ADDNAVLINK, payload: navlink };
};
