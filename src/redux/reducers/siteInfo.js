import {
  SETACTIVESUBJECT,
  SETSITEDETAILS,
  ADDNAVLINK,
  REMOVENAVLINK,
  ADDSUBJECT,
  REMOVESUBJECT,
  ADDSUBJECTTOPIC,
  ADDSUBJECTSUBTOPIC,
  UPDATEFORMDETAILS,
  UPDATEOTHERDETAILS,
} from "../actions/types";

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
    case REMOVENAVLINK: {
      return {
        ...state,
        navlinks: state.navlinks.filter((x) => x.name !== action.payload),
      };
    }
    case ADDSUBJECT: {
      let newData = Object.assign(state.subjects, [
        ...state.subjects,
        action.payload,
      ]);
      return {
        ...state,
        subjects: newData,
      };
    }
    case REMOVESUBJECT: {
      return {
        ...state,
        subjects: state.subjects.filter((x) => x.name !== action.payload),
      };
    }
    case ADDSUBJECTTOPIC: {
      let updateSubject = state.subjects.find(
        (subject) => subject.name == action.payload.subject
      );
      updateSubject.topics.push({ topic: action.payload.name, subtopics: [] });

      return {
        ...state,
        subjects: state.subjects,
      };
    }
    case ADDSUBJECTSUBTOPIC: {
      let updateSubject = state.subjects.find(
        (subject) => subject.name === action.payload.subject
      );
      let updateTopic = updateSubject.topics.find(
        (topicItem) => topicItem.name === action.payload.name
      );
      updateTopic.subtopics.push({
        name: action.payload.subtopic,
        link: action.payload.subtopiclink,
      });

      return {
        ...state,
        subjects: [...state.subjects],
      };
    }
    case UPDATEFORMDETAILS: {
      if (action.payload.type === "menu") {
        let updateNavlink = state.navlinks.find(
          (navlink) =>
            navlink.name === action.payload.oldDetails.name &&
            navlink.link === action.payload.oldDetails.link
        );
        updateNavlink.name = action.payload.newDetails.name;
        updateNavlink.link = action.payload.newDetails.link;
      } else if (action.payload.type === "subject") {
        let updateSubjectName = state.subjects.find(
          (subject) => subject.name === action.payload.oldDetails.name
        );
        updateSubjectName.name = action.payload.newDetails.name;
      }
      return {
        ...state,
        navlinks: { ...state.navlinks },
        subjects: { ...state.subjects },
      };
    }
    case UPDATEOTHERDETAILS: {
      return {
        ...state,
        ...action.payload,
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
