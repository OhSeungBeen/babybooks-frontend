import React from "react";
import { AppBar, Box, Theme, Toolbar } from "@mui/material";
import { State } from "../../../types";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";

import { ADMIN_MANAGE_ACCOUNT, LOGOUT } from "../../../config/strings";

function Header(props: any) {
  const { page } = props;
  const useStyles = makeStyles((theme: Theme) => ({
    header: {
      fontSize: "20pt",
    },
    logo: {},
    title: {},
    space: { flexGrow: 1 },
    separator: {
      width: "1px",
      height: "0.8em",
      marginLeft: "10px",
      marginRight: "10px",
      borderLeft: "1px solid",
      borderColor: theme.palette.secondary.main,
    },
  }));

  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar className={classes.header}>
        <Box className={classes.logo}>📔</Box>
        <Box className={classes.title}>{page.title}</Box>
        <Box className={classes.space} />
        <Box>Account</Box>
        <Box className={classes.separator} />
        <Box>{ADMIN_MANAGE_ACCOUNT}</Box>
        <Box className={classes.separator} />
        <Box>{LOGOUT}</Box>
      </Toolbar>
    </AppBar>
  );
}

function mapStateToProps(state: State) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(Header);
