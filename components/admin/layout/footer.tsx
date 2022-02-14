import React from 'react';
import { connectState } from 'redux/store';
import { ComponentProps } from 'types';

import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    width: '100%',
    position: 'fixed',
    background: theme.palette.secondary.main,
    bottom: '0px',
    textAlign: 'right',
    padding: '10px',
    zIndex: 1,
    fontSize: '10pt',
    height: '40px',
  },
}));

const Footer: React.FC<ComponentProps> = ({}) => {
  const classes = useStyles();

  return (
    <footer id="footer" className={classes.footer}>
      <Box>Copyright ⓒ 베비북스 All rights reserved.</Box>
    </footer>
  );
};

export default connectState(Footer);
