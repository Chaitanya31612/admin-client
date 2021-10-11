import { SETADMIN, SETSELECTEDMENU } from "./types";

export const setAdmin = () => {
  return { type: SETADMIN };
};

export const setSelectedMenu = (selectedMenu) => {
  return { type: SETSELECTEDMENU, payload: selectedMenu };
};
