import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Star, StarBorder } from '@mui/icons-material';
import { Box, Breadcrumbs, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { PageAction } from '../../../redux/actions';
import { State } from '../../../types';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem',
    height: '3rem',
  },
  favorites: {
    marginLeft: 'auto',
  },
}));

const Navigation: React.FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const page = useSelector((state: State) => state.page);

  const handleFavorites = () => {
    dispatch(PageAction.setFavorites(!page.isFavorites));
  };

  return (
    <Box className={classes.container}>
      <Box>
        <Breadcrumbs separator="›">
          {page.breadcrumb.map((categoryText, index) => (
            <Typography key={index}>{categoryText}</Typography>
          ))}
        </Breadcrumbs>
      </Box>
      <Box className={classes.favorites}>
        <Button onClick={handleFavorites}>
          {page.isFavorites ? <Star /> : <StarBorder />}
          즐겨찾기
        </Button>
      </Box>
    </Box>
  );
};

export default Navigation;
