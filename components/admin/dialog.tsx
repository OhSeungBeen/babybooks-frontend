import { Close } from "@mui/icons-material";
import { Box, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { ReactElement } from "react";
import { connectState } from "redux/store";
import { ComponentProps } from "types";

interface DialogProps extends ComponentProps {
  isOpen: boolean;
}

const Dialog = (props: DialogProps): ReactElement => {
  const { state, dispatch, children } = props;

  const useStyles = makeStyles((theme: Theme) => ({
    dialog: {
      width: "100%",
      backgroundColor: theme.palette.secondary.light,
      display: "flex",
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.dialog}>
      <Box>
        <Close />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default connectState(Dialog);
