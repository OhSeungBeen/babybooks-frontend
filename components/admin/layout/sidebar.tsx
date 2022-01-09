import { Expand } from "@mui/icons-material";
import { Drawer, Box, Theme, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { ReactElement } from "react";
import { AppAction } from "redux/actions";
import { connectState } from "redux/store";
import { ComponentProps } from "types";

function SideBar(props: ComponentProps): ReactElement {
  const { state, dispatch } = props;
  const sideBarWidth = state.app.sideBar.width;
  const headerHeight = "64px";
  const footerHeight = "44px";
  const useStyles = makeStyles((theme: Theme) => ({
    nav: {
      marginLeft: `${
        state.app.sideBar.isShow ? "0px" : "calc(80px - " + sideBarWidth + ")"
      }`,
      transition: "margin 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
      [theme.breakpoints.up("md")]: {
        width: sideBarWidth,
        flexShrink: 0,
      },
    },
    expandButton: {
      width: "100%",
      border: "1px solid",
      borderColor: theme.palette.primary.main,
      borderRadius: "10px",
    },
    drawerPaper: {
      width: `${state.app.sideBar.isShow ? sideBarWidth : "80px"}`,
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
    state.app.sideBar.isShow = !state.app.sideBar.isShow;
    dispatch(AppAction.setSideBar(state.app.sideBar));
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
        <Box className={classes.drawContainor}>
          <IconButton className={classes.expandButton} onClick={setSideBar}>
            <Expand sx={{ transform: "rotate(90deg)" }} />
          </IconButton>
          SIDEBAR
        </Box>
      </Drawer>
    </nav>
  );
}

export default connectState(SideBar);
