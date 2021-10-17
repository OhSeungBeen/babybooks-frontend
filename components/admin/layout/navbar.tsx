import React from "react";
import { Box, Button, Theme } from "@mui/material";
import { State } from "../../../types";
import { connect } from "react-redux";
import { Star, StarBorder } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import { PageAction } from "../../../redux/actions";

function NavBar(props: any) {
  const { navigator, siteInfo, dispatch } = props;
  const text = navigator.join(" > ");

  const useStyles = makeStyles((theme: Theme) => ({
    favorites: {
      float: "right",
    },
  }));

  const classes = useStyles();

  const setFavorites = (event: React.SyntheticEvent) => {
    dispatch(PageAction.setFavorites(!siteInfo.isFavorites));
  };

  const favorites = (
    <Button className={classes.favorites} onClick={setFavorites}>
      {siteInfo.isFavorites ? <Star /> : <StarBorder />}
      즐겨찾기
    </Button>
  );

  return (
    <Box>
      {text}
      {favorites}
    </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
