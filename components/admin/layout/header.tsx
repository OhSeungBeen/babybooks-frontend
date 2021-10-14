import React from "react";
import { Box, Theme } from "@mui/material";
import { ComponentProps } from "../../../types";
import { makeStyles } from "@mui/styles";

interface HeaderProps extends ComponentProps {}

interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    return <Box className={this.props.classes.header}>HEADER</Box>;
  }
}

const Export = () => {
  const useStyles = makeStyles((theme: Theme) => ({
    header: {},
  }));
  const classes = useStyles();
  return <Header classes={classes} />;
};

export default Export;
