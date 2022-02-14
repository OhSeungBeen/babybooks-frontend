import React from 'react';

import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { makeStyles } from '@mui/styles';

import CategoryRowItem from './categoryRowItem';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
  },
  item: {
    flex: 1,
    '& .MuiFormGroup-root': {},
  },
  radioGroup: {
    '& span': {
      fontSize: '0.875rem',
    },
    '& svg': {
      fontSize: '1.1rem',
    },
  },
});

interface CategoryVisibleRowProps {
  visible: boolean;
  use: boolean;
  onChange: (param: { name: string; value: boolean }) => void;
}

const CategoryVisibleRow: React.FC<CategoryVisibleRowProps> = ({
  visible,
  use,
  onChange,
}) => {
  const classes = useStyles();

  const onLocalChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const boolValue = value === 'true';
    onChange({ name: e.target.name, value: boolValue });
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.item}>
        <CategoryRowItem
          title="메뉴노출여부"
          content={
            <RadioGroup
              row
              value={visible}
              className={classes.radioGroup}
              name="visible"
              onChange={onLocalChange}
            >
              <FormControlLabel
                disabled={use ? false : true}
                value={true}
                label="Y"
                labelPlacement="end"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                disabled={use ? false : true}
                value={false}
                label="N"
                labelPlacement="end"
                control={<Radio />}
              ></FormControlLabel>
            </RadioGroup>
          }
        ></CategoryRowItem>
      </Box>
      <Box className={classes.item}>
        <CategoryRowItem
          title="메뉴사용여부"
          content={
            <RadioGroup
              row
              value={use}
              name="use"
              className={classes.radioGroup}
              onChange={onLocalChange}
            >
              <FormControlLabel
                value={true}
                label="Y"
                labelPlacement="end"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value={false}
                label="N"
                labelPlacement="end"
                control={<Radio />}
              ></FormControlLabel>
            </RadioGroup>
          }
        ></CategoryRowItem>
      </Box>
    </Box>
  );
};

export default CategoryVisibleRow;
