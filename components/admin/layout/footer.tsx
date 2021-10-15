import React from "react";
import { Box, Theme } from "@mui/material";
import { State } from "../../../types";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";

function Footer(props: any) {
  const useStyles = makeStyles((theme: Theme) => ({
    footer: {
      width: "100%",
      position: "fixed",
      background: theme.palette.secondary.main,
      bottom: "0px",
      textAlign: "right",
      padding: "10px",
      zIndex: 1,
    },
  }));

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Box>Copyright ⓒ 베비북스 All rights reserved.</Box>
    </footer>
  );
}

function mapStateToProps(state: State) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(Footer);
