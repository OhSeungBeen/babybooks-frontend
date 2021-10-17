import React from "react";

import { Drawer, Box, Theme, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { State } from "../../../types";
import { connect } from "react-redux";
import { Menu } from "@mui/icons-material";

function SideBar(props: any) {
  const drawerWidth = "250px";
  const headerHeight = "64px";
  const footerHeight = "44px";
  const useStyles = makeStyles((theme: Theme) => ({
    nav: {
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
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
      left: drawerWidth,
      border: "1px solid",
      borderColor: theme.palette.primary.main,
      borderRadius: "10px",
    },
  }));

  const classes = useStyles();

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
        <Box className={classes.drawContainor}>SIDEBAR</Box>
      </Drawer>
      <IconButton className={classes.navButton}>
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

export default connect(mapStateToProps)(SideBar);
