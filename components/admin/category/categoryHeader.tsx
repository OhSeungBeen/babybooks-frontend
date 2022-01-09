import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface CategoryHeaderProps {
  title: string;
  buttonText: string;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  title: {
    fontWeight: 'bold',
  },
});

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  buttonText,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>{title}</Typography>
      <Button variant="contained">{buttonText}</Button>
    </Box>
  );
};

export default CategoryHeader;
