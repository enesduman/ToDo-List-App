import axios from "axios";
import { TASK_FULFILLED, TASKS_FULFILLED } from "./types";
import { deleteQuery, getQuery, postQuery } from "./globalActions";

export const tasksGet = () => {
  return (dispatch) => {
    dispatch(
      getQuery(3000, "tasks", (data) => {
        dispatch({ type: TASKS_FULFILLED, payload: data });
      })
    );
  };
};
export const taskAdd = (task) => {
  return (dispatch) => {
    dispatch(
      postQuery(3000, "tasks", task, (data) => {
        dispatch({ type: TASK_FULFILLED, payload: data });
        dispatch(tasksGet(dispatch));
      })
    );
  };
};
export const taskDelete = (id) => {
  return (dispatch) => {
    dispatch(
      deleteQuery(3000, "tasks", id, () => {
        dispatch(tasksGet(dispatch));
      })
    );
  };
};
