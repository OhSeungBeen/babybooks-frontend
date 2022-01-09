import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface CategoryInfoItemProps {
  title: string;
  children: JSX.Element | string;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: '1rem',
    width: '7.5rem',
    '& p': {
      fontSize: '1rem',
    },
  },
  content: {
    flex: 1,
    fontSize: '1rem',
  },
});

const CategoryInfoItem: React.FC<CategoryInfoItemProps> = ({
  title,
  children,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        <Typography>{title}</Typography>
      </Box>
      <Box className={classes.content}>{children}</Box>
    </Box>
  );
};

export default CategoryInfoItem;
