import { CHANGE_LANGUAGE } from "./types";

export const changeLanguage = (language) => {
  return (dispatch) => {
    console.log(language, "DİL");
    dispatch({ type: CHANGE_LANGUAGE, language });
  };
};
