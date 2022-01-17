import React, { useState, useEffect } from 'react';
import { Box, OutlinedInput, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CategoryRowItem from './categoryRowItem';

interface CategoryNameRowProps {
  code: string;
  name: string;
  onChange: (name: string) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    '& input': {
      fontSize: '0.875rem',
      padding: '0.3rem 0.6rem',
    },
  },
}));

const CategoryNameRow: React.FC<CategoryNameRowProps> = ({
  code,
  name,
  onChange,
}) => {
  const classes = useStyles();

  const [value, setValue] = useState(name);

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <Box className={classes.container}>
      <Box className={classes.item}>
        <CategoryRowItem title="카테고리코드" content={code} />
      </Box>
      <Box className={classes.item}>
        <CategoryRowItem
          title="카테고리명"
          content={
            <OutlinedInput
              inputProps={{ maxLength: 20 }}
              value={name}
              onChange={(e) => onChangeInput(e)}
            />
          }
        ></CategoryRowItem>
      </Box>
    </Box>
  );
};

export default CategoryNameRow;
