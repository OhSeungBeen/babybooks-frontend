import React from 'react';
import { Box, Input } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CategoryInfoItem from './categoryInfoItem';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    flex: 1,
  },
  nameInput: {
    border: 'solid 0.1rem',
  },
});

const CategoryInfo: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.item}>
          <CategoryInfoItem title="카테고리코드">01000000</CategoryInfoItem>
        </Box>
        <Box className={classes.item}>
          <CategoryInfoItem title="카테고리명">
            <Input
              defaultValue="메인"
              className={classes.nameInput}
              disableUnderline
            />
          </CategoryInfoItem>
        </Box>
      </Box>
    </>
  );
};

export default CategoryInfo;
