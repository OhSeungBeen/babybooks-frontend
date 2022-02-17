import React from 'react';

import { Box, Button, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface CategoryHeaderProps {
  title: string;
  buttonText: string;
  buttonVisible: boolean;
  description?: string;
  onOpen: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
    minHeight: '2.5rem',
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
  buttonVisible,
  onOpen,
}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.header}>
        <Typography>{title}</Typography>
        {buttonVisible && (
          <Button hidden variant="contained" onClick={onOpen}>
            {buttonText}
          </Button>
        )}
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
