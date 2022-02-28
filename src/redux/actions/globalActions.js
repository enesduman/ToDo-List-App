import axios from "axios";

export const getQuery = (port, path, cb) => {
  return (dispatch, getState) => {
    axios
      .get(`http://localhost:${port}/${path}`, {})
      .then((res) => {
        if (res.data) {
          cb(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };
};

export const postQuery = (port, path, modal, cb) => {
  return (dispatch, getState) => {
    axios
      .post(`http://localhost:${port}/${path}`, { ...modal })
      .then((res) => {
        if (res.data) {
          cb(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };
};

export const deleteQuery = (port, path, id, cb) => {
  return (dispatch, getState) => {
    axios
      .delete(`http://localhost:${port}/${path}/${id}`)
      .then((res) => {
        if (res.data) {
          cb(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };
};

export const putQuery = (port, path, id, modal, cb) => {
  return (dispatch, getState) => {
    axios
      .put(`http://localhost:${port}/${path}/${id}`, { ...modal })
      .then((res) => {
        if (res.data) {
          cb(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };
};
