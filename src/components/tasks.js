import {
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { tasksGet, taskDelete } from "../redux/actions/taskActions";
import DeleteIcon from "@mui/icons-material/Delete";

const Tasks = (props) => {
  const dispatch = useDispatch();

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    props.tasksGet(dispatch);
  }, []);

  useEffect(() => {
    setTasks(props.taskReducer.tasks);
  }, [props.taskReducer.tasks]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="dangerColor">ID</TableCell>
            <TableCell className="dangerColor" align="center">
              {props.languageReducer.language == "EN"
                ? "Task Title"
                : "Görev Başlığı"}
            </TableCell>
            <TableCell className="dangerColor" align="center">
              {props.languageReducer.language == "EN"
                ? "Task Description"
                : "Görev Açıklaması"}
            </TableCell>
            <TableCell className="dangerColor" align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((v, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {v.id}
              </TableCell>
              <TableCell align="center">{v.title}</TableCell>
              <TableCell align="center">{v.description}</TableCell>
              <TableCell align="center">
                <Checkbox
                  control={<Checkbox defaultChecked />}
                  size="medium"
                ></Checkbox>
              </TableCell>
              <TableCell align="center">
                <IconButton
                  onClick={() => {
                    props.taskDelete(v.id, dispatch);
                  }}
                  color="error"
                  aria-label="delete"
                  size="large"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = ({ taskReducer, languageReducer }) => {
  return { taskReducer, languageReducer };
};
const mapDispatchToProps = { tasksGet, taskDelete };

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
