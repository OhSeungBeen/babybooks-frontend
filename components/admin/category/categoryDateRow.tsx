import React from 'react';

import { Box, Input } from '@mui/material';
import {} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import CategoryRowItem from './categoryRowItem';

interface CategoryDateRowProps {
  registerId: string;
  modifierId: string;
  registeredDate: string;
  modifiedDate: string;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    flex: 1,
  },
  nameInput: {
    border: 'solid 1px',
  },
});

const CategoryDateRow: React.FC<CategoryDateRowProps> = ({
  registerId,
  modifierId,
  registeredDate,
  modifiedDate,
}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.item}>
          <CategoryRowItem title="등록자ID" content={registerId} />
        </Box>
        <Box className={classes.item}>
          <CategoryRowItem title="등록일시" content={modifierId} />
        </Box>
      </Box>
      <Box className={classes.container}>
        <Box className={classes.item}>
          <CategoryRowItem title="수정자ID" content={registeredDate} />
        </Box>
        <Box className={classes.item}>
          <CategoryRowItem title="수정일시" content={modifiedDate} />
        </Box>
      </Box>
    </>
  );
};

export default CategoryDateRow;
