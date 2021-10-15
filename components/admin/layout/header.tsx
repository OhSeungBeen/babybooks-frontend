import React from "react";
import { Box, Theme } from "@mui/material";
import { State } from "../../../types";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";

function Header(props: any) {
  const { siteInfo } = props;
  const useStyles = makeStyles((theme: Theme) => ({
    header: {
      display: "flex",
    },
    logo: {
      fontSize: "20pt",
    },
    title: {},
  }));

  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Box className={classes.logo}>📔</Box>
      <Box className={classes.title}>{siteInfo.title}</Box>
    </Box>
  );
}

function mapStateToProps(state: State) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(Header);
