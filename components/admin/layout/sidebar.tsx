import React from "react";

import { Drawer, Box, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { State } from "../../../types";
import { connect } from "react-redux";

function SideBar(props: any) {
  const { app } = props;
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
    
  }));

  const classes = useStyles();

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
