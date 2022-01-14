import React from 'react';
import { Radio, FormControlLabel, RadioGroup, Box } from '@mui/material';
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
  onVisibleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
  onUseChange: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

const CategoryVisibleRow: React.FC<CategoryVisibleRowProps> = ({
  visible,
  use,
  onVisibleChange: onVisibleChange,
  onUseChange: onUseChange,
}) => {
  const classes = useStyles();

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
              onChange={onVisibleChange}
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
              className={classes.radioGroup}
              onChange={onUseChange}
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
