import React from "react";
import { Box, Theme } from "@mui/material";
import { ComponentProps } from "../../../types";
import { makeStyles } from "@mui/styles";

interface FooterProps extends ComponentProps {}

interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  render() {
    return (
      <footer className={this.props.classes.footer}>
        <Box>Copyright ⓒ 베비북스 All rights reserved.</Box>
      </footer>
    );
  }
}

const Export = () => {
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
  return <Footer classes={classes} />;
};

export default Export;
