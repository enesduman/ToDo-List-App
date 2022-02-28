import React from "react";
import { Button, CardHeader } from "@mui/material";
import { changeLanguage } from "../redux/actions/languageActions";
import { connect, useDispatch } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <CardHeader title={"TO-DO LİST APP"}></CardHeader>
        <Button
          onClick={() => {
            props.changeLanguage(
              props.languageReducer.language == "EN" ? "TR" : "EN",
              dispatch
            );
          }}
          variant="contained"
        >
          {props.languageReducer.language == "EN" ? "TR" : "EN"}
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = ({ languageReducer }) => {
  return { languageReducer };
};
const mapDispatchToProps = { changeLanguage };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
