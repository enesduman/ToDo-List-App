import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { taskAdd } from "../redux/actions/taskActions";

export const AddTask = (props) => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    completed: false,
  });

  return (
    <div className="addTaskWrap">
      <TextField
        onChange={(e) => {
          setNewTask({ ...newTask, title: e.target.value });
        }}
        id="outlined-name"
        value={newTask.title}
        label={
          props.languageReducer.language == "EN"
            ? "Task Title"
            : "Görev Başlığı"
        }
      />

      <TextField
        onChange={(e) => {
          setNewTask({ ...newTask, description: e.target.value });
        }}
        id="outlined-name"
        value={newTask.description}
        label={
          props.languageReducer.language == "EN"
            ? "Task Description"
            : "Görev Açıklaması"
        }
      />
      <Button
        onClick={() => {
          if (newTask.title !== "" && newTask.description !== "") {
            props.taskAdd(newTask, dispatch);
            setNewTask({ title: "", description: "" });
          } else {
            props.languageReducer.language == "EN"
              ? alert("Fill in the required fields. ")
              : alert("Zorunlu alanları doldurunuz. ");
          }
        }}
        style={{ marginTop: "auto", marginBottom: "auto" }}
        color="warning"
        variant="contained"
        endIcon={<SendIcon />}
      >
        {props.languageReducer.language == "EN" ? "Add Task" : "Görev Ekle"}
      </Button>
    </div>
  );
};

const mapStateToProps = ({ languageReducer }) => ({ languageReducer });

const mapDispatchToProps = { taskAdd };

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
