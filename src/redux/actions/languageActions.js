import { CHANGE_LANGUAGE } from "./types";

export const changeLanguage = (language) => {
  return (dispatch) => {
    dispatch({ type: CHANGE_LANGUAGE, language });
  };
};
