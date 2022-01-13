import React from 'react';
import { Box, Typography, Button, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface CategoryHeaderProps {
  title: string;
  buttonText: string;
  description?: string;
  onButtonClick: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
    '& p': {
      fontWeight: 'bold',
    },
  },
  description: {
    marginBottom: '0.3rem',
    '& p': {
      textAlign: 'end',
      fontSize: '0.775rem',
      color: theme.palette.error.main,
    },
  },
}));

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  buttonText,
  description,
  onButtonClick,
}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.header}>
        <Typography>{title}</Typography>
        <Button variant="contained" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Box>
      {description && (
        <Box className={classes.description}>
          <Typography>{description}</Typography>
        </Box>
      )}
    </>
  );
};

export default CategoryHeader;
