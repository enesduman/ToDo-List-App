import { TASKS_FULFILLED } from "../actions/types";
import { TASK_FULFILLED } from "../actions/types";
const initialState = {
  tasks: [],
  task: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TASKS_FULFILLED:
      return {
        ...state,
        tasks: action.payload,
      };
    case TASK_FULFILLED:
      return {
        ...state,
        task: action.payload,
      };

    default:
      return state;
  }
};
