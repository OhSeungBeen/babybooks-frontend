import React from "react";
import { Box } from "@mui/material";
import { State } from "../../../types";
import { connect } from "react-redux";

function NavBar(props: any) {
  const { navigator } = props;
  console.log(props);
  const text = navigator.join(" > ");
  return <Box>{text}</Box>;
}

function mapStateToProps(state: State) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
