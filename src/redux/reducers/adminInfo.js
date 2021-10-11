import { SETADMIN, SETSELECTEDMENU } from "../actions/types";

const initialState = {
  type: null,
  selectedMenu: "dashboard",
};

const adminInfo = (state = initialState, action) => {
  switch (action.type) {
    case SETADMIN:
      return (state.type = "admin");
    case SETSELECTEDMENU:
      return (state.selectedMenu = action.payload);
    default:
      return state;
  }
};

export default adminInfo;
