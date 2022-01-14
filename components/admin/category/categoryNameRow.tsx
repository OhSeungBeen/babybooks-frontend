import React from 'react';
import { Box, Input } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CategoryRowItem from './categoryRowItem';

interface CategoryNameRowProps {
  code: string;
  name: string;
  onNameChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    flex: 1,
  },
  input: {
    border: 'solid 1px',
    borderRadius: '4px',
    fontSize: '0.875rem',
    '& input': {
      padding: '0.3rem 0.6rem',
    },
  },
});

const CategoryNameRow: React.FC<CategoryNameRowProps> = ({
  code,
  name,
  onNameChange,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.item}>
        <CategoryRowItem title="카테고리코드" content={code} />
      </Box>
      <Box className={classes.item}>
        <CategoryRowItem
          title="카테고리명"
          content={
            <Input
              className={classes.input}
              disableUnderline
              value={name}
              onChange={(e) => onNameChange(e)}
            />
          }
        ></CategoryRowItem>
      </Box>
    </Box>
  );
};

export default CategoryNameRow;
