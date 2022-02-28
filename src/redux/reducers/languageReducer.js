import { CHANGE_LANGUAGE } from "../actions/types";
const initialState = {
  language: "EN",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };

    default:
      return state;
  }
};
