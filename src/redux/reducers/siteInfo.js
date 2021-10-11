import { SETACTIVESUBJECT, SETSITEDETAILS, ADDNAVLINK } from "../actions/types";

const initialState = {
  univLogo: "",
  footer: "",
  navlinks: [],
  subjects: [],
  activeSubject: null,
};

const siteInfo = (state = initialState, action) => {
  switch (action.type) {
    case SETSITEDETAILS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case ADDNAVLINK: {
      let newData = Object.assign(state.navlinks, [
        ...state.navlinks,
        action.payload,
      ]);
      return {
        ...state,
        navlinks: newData,
      };
    }
    case SETACTIVESUBJECT: {
      return {
        ...state,
        activeSubject: action.payload,
      };
    }
    default:
      return state;
  }
};

export default siteInfo;
