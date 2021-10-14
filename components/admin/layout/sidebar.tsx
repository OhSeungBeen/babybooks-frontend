import React from "react";

import { Drawer, Box, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ComponentProps } from "../../../types";

interface SidebarProps extends ComponentProps {}

interface SidebarState {}

class Sidebar extends React.Component<SidebarProps, SidebarState> {
  render() {
    return (
      <nav className={this.props.classes.nav}>
        <Drawer
          variant={"persistent"}
          ModalProps={{ keepMounted: true }}
          open={true}
          classes={{
            paper: this.props.classes.drawerPaper,
          }}
        >
          <Box className={this.props.classes.drawContainor}>SIDEBAR</Box>
        </Drawer>
      </nav>
    );
  }
}

const Export = () => {
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
  }));
  const classes = useStyles();
  return <Sidebar classes={classes} />;
};

export default Export;
