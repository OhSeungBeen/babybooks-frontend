import { Star, StarBorder } from "@mui/icons-material";
import { Box, Button, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { ReactElement } from "react";
import { PageAction } from "redux/actions";
import { connectState } from "redux/store";
import { ComponentProps } from "types";

function Breadcrumb(props: ComponentProps): ReactElement {
  const { state, dispatch } = props;
  const text = state.page.breadcrumb.join(" > ");

  const useStyles = makeStyles((theme: Theme) => ({
    favorites: {
      float: "right",
    },
  }));

  const classes = useStyles();

  const setFavorites = (event: React.SyntheticEvent) => {
    dispatch(PageAction.setFavorites(!state.page.isFavorites));
  };

  const favorites = (
    <Button className={classes.favorites} onClick={setFavorites}>
      {state.page.isFavorites ? <Star /> : <StarBorder />}
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

export default connectState(Breadcrumb);
