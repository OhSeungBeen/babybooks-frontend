import { AppBar, Box, Theme, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ADMIN_MANAGE_ACCOUNT, LOGOUT } from "config/strings";
import React, { ReactElement } from "react";
import { connectState } from "redux/store";
import { ComponentProps } from "types";

function Header(props: ComponentProps): ReactElement {
  const { state } = props;
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
        <Box className={classes.title}>{state.page.title}</Box>
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

export default connectState(Header);
