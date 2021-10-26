import {
  SETACTIVESUBJECT,
  SETSITEDETAILS,
  ADDNAVLINK,
  ADDSUBJECT,
  REMOVESUBJECT,
  REMOVENAVLINK,
  ADDSUBJECTTOPIC,
  ADDSUBJECTSUBTOPIC,
  UPDATEOTHERDETAILS,
  UPDATEFORMDETAILS,
  REMOVETOPIC,
} from "../actions/types";
import axios from "axios";
import swal from "sweetalert";

export const setActiveSubject = (subject) => {
  return { type: SETACTIVESUBJECT, payload: subject };
};

export const setSiteDetails = (siteDetails) => {
  return { type: SETSITEDETAILS, payload: siteDetails };
};

export const addNavLink = (navlink) => async (dispatch) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/admin/addnavlink`,
      navlink
    );
    swal("Success", "Navigation Link added successfully", "success");
    return dispatch({ type: ADDNAVLINK, payload: navlink });
  } catch (err) {
    swal("Error in adding Navigation Link", "Try Again", "error");
  }
};

export const removeNavLink = (navlink) => async (dispatch) => {
  try {
    const willdelete = await swal(
      `Delete ${navlink.name}`,
      `Are you sure you want to delete ${navlink.name}`,
      "warning"
    );
    if (willdelete) {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/admin/removenavlink`,
        navlink
      );
      swal("Success", "Navigation Link removed successfully", "success");
      return dispatch({ type: REMOVENAVLINK, payload: navlink.name });
    }
  } catch (err) {
    swal("Error removing Navigation Link", "Try Again", "error");
  }
};

export const addSubject = (subject) => async (dispatch) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/admin/addsubject`,
      subject
    );
    swal("Success", "Subject added successfully", "success");
    return dispatch({ type: ADDSUBJECT, payload: subject });
  } catch (err) {
    swal("Error in adding Subject", "Try Again", "error");
  }
};

export const removeSubject = (subject) => async (dispatch) => {
  try {
    const willdelete = await swal(
      `Delete ${subject.name}`,
      `Are you sure you want to delete ${subject.name}`,
      "warning"
    );
    if (willdelete) {
      console.log("hello there", subject);
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/admin/removesubject`,
        subject
      );
      swal("Success", "Subject removed successfully", "success");
      return dispatch({ type: REMOVESUBJECT, payload: subject.name });
    }
  } catch (err) {
    swal("Error in removing Subject", "Try Again", "error");
  }
};

// add topic

export const addSubjectTopic = (topicData) => async (dispatch) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/admin/addsubjectopic`,
      topicData
    );
    await swal("Success", "Subject Topic added successfully", "success");
    return dispatch({ type: ADDSUBJECTTOPIC, payload: topicData });
  } catch (err) {
    swal("Error in adding Subject Topic", "Try Again", "error");
  }
};

// add subtopic
export const addSubjectSubtopic = (subtopicData) => async (dispatch) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/admin/addsubjecsubtopic`,
      subtopicData
    );
    swal("Success", "Subject Subtopic added successfully", "success");
    return dispatch({ type: ADDSUBJECTSUBTOPIC, payload: subtopicData });
  } catch (err) {
    swal("Error in adding Subject Subtopic", "Try Again", "error");
  }
};

export const updateOtherDetails = (updateDetails) => async (dispatch) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/admin/addsitedata`,
      updateDetails
    );
    swal("Success", "Subject Topic added successfully", "success");
    return dispatch({ type: UPDATEOTHERDETAILS, payload: updateDetails });
  } catch (err) {
    swal("Error in adding Subject Topic", "Try Again", "error");
  }
};

export const updateFormData = (updateDetails) => async (dispatch) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/admin/updatedetails`,
      updateDetails
    );
    await swal("Success", "Form updated successfully", "success");
    window.location.reload();
    return dispatch({ type: UPDATEFORMDETAILS, payload: updateDetails });
  } catch (err) {
    swal("Error in updating", "Try Again", "error");
  }
};

export const removeTopic = (removeTopicData) => async (dispatch) => {
  try {
    console.log(removeTopicData);
    const willdelete = await swal(
      `Delete ${removeTopicData.topic}`,
      `Are you sure you want to delete ${removeTopicData.topic}`,
      "warning"
    );
    if (willdelete) {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/admin/removetopic`,
        removeTopicData
      );
      await swal(
        "Success",
        `${removeTopicData.topic.name} removed successfully`,
        "success"
      );
      window.location.reload();
      return dispatch({ type: REMOVETOPIC, payload: removeTopicData });
    }
  } catch (err) {
    swal("Error removing topic", "Try Again", "error");
  }
};
