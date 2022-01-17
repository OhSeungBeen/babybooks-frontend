import React, { useRef, useEffect, useState, useCallback } from 'react';
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
  onChange: (param: { visible: boolean; use: boolean }) => void;
}

const CategoryVisibleRow: React.FC<CategoryVisibleRowProps> = ({
  visible,
  use,
  onChange: onUpdate,
}) => {
  const classes = useStyles();

  const mounted = useRef(false);

  const [values, setValues] = useState({ visible, use });

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
      const boolValue = value === 'true';
      setValues((prev) => ({ ...prev, [e.target.name]: boolValue }));
    },
    []
  );

  useEffect(() => {
    setValues({ visible, use });
  }, [use, visible]);

  useEffect(() => {
    if (!mounted.current) return;
    onUpdate(values);
  }, [values, onUpdate]);

  useEffect(() => {
    mounted.current = true;
  }, []);

  return (
    <Box className={classes.container}>
      <Box className={classes.item}>
        <CategoryRowItem
          title="메뉴노출여부"
          content={
            <RadioGroup
              row
              value={values.visible}
              className={classes.radioGroup}
              name="visible"
              onChange={onChange}
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
              value={values.use}
              name="use"
              className={classes.radioGroup}
              onChange={onChange}
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
