import React from "react";

import { Drawer, Box, Theme, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { State } from "../../../types";
import { connect } from "react-redux";
import { Expand } from "@mui/icons-material";
import { AppAction } from "../../../redux/actions";

function SideBar(props: any) {
  const { app, dispatch } = props;
  const sideBarWidth = app.sideBar.width;
  const headerHeight = "64px";
  const footerHeight = "44px";
  const useStyles = makeStyles((theme: Theme) => ({
    nav: {
      marginLeft: `${
        app.sideBar.isShow ? "0px" : "calc(80px - " + sideBarWidth + ")"
      }`,
      transition: "margin 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
      [theme.breakpoints.up("md")]: {
        width: sideBarWidth,
        flexShrink: 0,
      },
    },
    navButton: {
      border: "1px solid",
      borderColor: theme.palette.primary.main,
      borderRadius: "10px",
    },
    drawerPaper: {
      width: `${app.sideBar.isShow ? sideBarWidth : "80px"}`,
      transition: "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      borderRight: "none",
      top: headerHeight,
      zIndex: 0,
    },
    drawContainor: {
      height: `calc(100% - ${headerHeight} - ${footerHeight})`,
      backgroundColor: theme.palette.secondary.main,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: theme.palette.primary.main,
    },
  }));

  const classes = useStyles();

  const setSideBar = () => {
    app.sideBar.isShow = !app.sideBar.isShow;
    dispatch(AppAction.setSideBar(app.sideBar));
  };

  return (
    <nav className={classes.nav}>
      <Drawer
        variant={"persistent"}
        ModalProps={{ keepMounted: true }}
        open={true}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <IconButton className={classes.navButton} onClick={setSideBar}>
          <Expand sx={{ transform: "rotate(90deg)" }} />
        </IconButton>
        <Box className={classes.drawContainor}>SIDEBAR</Box>
      </Drawer>
    </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
