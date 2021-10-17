import React from "react";

import { Drawer, Box, Theme, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { State } from "../../../types";
import { connect } from "react-redux";
import { Menu } from "@mui/icons-material";
import { AppAction } from "../../../redux/actions";

function SideBar(props: any) {
  const { app, dispatch } = props;
  const sideBarWidth = app.sideBar.isShow ? app.sideBar.width : "0px";
  const headerHeight = "64px";
  const footerHeight = "44px";
  const useStyles = makeStyles((theme: Theme) => ({
    nav: {
      [theme.breakpoints.up("md")]: {
        width: sideBarWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: sideBarWidth,
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
    navButton: {
      left: `calc(${sideBarWidth} - 50px)`,
      border: "1px solid",
      borderColor: theme.palette.primary.main,
      borderRadius: "10px",
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
        open={app.sideBar.isShow}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box className={classes.drawContainor}>SIDEBAR</Box>
      </Drawer>
      <IconButton className={classes.navButton} onClick={setSideBar}>
        <Menu />
      </IconButton>
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
