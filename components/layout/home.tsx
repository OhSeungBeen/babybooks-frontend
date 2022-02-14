import React from 'react';

import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface HomeProps {
  children: React.ReactNode;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
  main: {
    flex: 1,
  },
});

const HomeLayout: React.FC<HomeProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <main className={classes.main}>{children}</main>
    </Box>
  );
};

export default HomeLayout;
