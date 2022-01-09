import React from 'react';
import { State } from '../../../types';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Breadcrumbs, Typography } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { PageAction } from '../../../redux/actions';

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
