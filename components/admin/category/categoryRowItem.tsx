import React from 'react';

import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface CategoryInfoItemProps {
  title: string;
  content: string | number | JSX.Element;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.2rem',
  },
  title: {
    width: '7.5rem',
    '& p': {},
  },
  content: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
  },
});

const CategoryInfoItem: React.FC<CategoryInfoItemProps> = ({
  title,
  content,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        <Typography variant="body2">{title}</Typography>
      </Box>
      <Box className={classes.content}>
        {typeof content === 'string' ? (
          <Typography variant="body2">{content}</Typography>
        ) : (
          <>{content}</>
        )}
      </Box>
    </Box>
  );
};

export default CategoryInfoItem;
