import { Card } from "@mui/material";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import AddTask from "./addTask";
import Header from "./header";
import Tasks from "./tasks";

const MainPage = (props) => {
  useEffect(() => {
    console.log(",deneme", props.languageReducer.language);
  }, [props.languageReducer.language]);
  return (
    <Card
      style={{
        width: "80%",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 30,
      }}
    >
      <Header />
      <Tasks />
      <AddTask />
    </Card>
  );
};

const mapStateToProps = ({ languageReducer }) => {
  return { languageReducer };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
