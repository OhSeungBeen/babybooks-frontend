import React from "react";
import { Box, Button, Tab, Tabs, Theme } from "@mui/material";
import { Close } from "@mui/icons-material";
import { State, TabInfo } from "../../types";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import { TabsAction } from "../../redux/actions";

function Dialog(props: any) {
  const { isOpen, dispatch } = props;

  console.log(`isOpen: ${isOpen}`);
  const useStyles = makeStyles((theme: Theme) => ({
    dialog: {
      width: "100%",
      backgroundColor: theme.palette.secondary.light,
      display: "flex",
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.dialog}>
      <Box>
        <Close />
      </Box>
      <Box>Contents</Box>
    </Box>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
