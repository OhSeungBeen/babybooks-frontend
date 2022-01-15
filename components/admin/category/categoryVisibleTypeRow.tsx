import React from 'react';
import {
  Radio,
  FormControlLabel,
  RadioGroup,
  Box,
  OutlinedInput,
  Button,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import CategoryRowItem from './categoryRowItem';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    '& input': {
      fontSize: '0.875rem',
      padding: '0.3rem 0.6rem',
    },
    '& .MuiFormGroup-root': { flexShrink: 0 },
  },
  button: {
    fontSize: '0.775rem',
    marginLeft: '0.5rem',
    flexShrink: 0,
  },
  radioGroup: {
    '& span': {
      fontSize: '0.875rem',
    },
    '& svg': {
      fontSize: '1.1rem',
    },
  },
}));

interface CategoryVisibleTypeRowsProps {
  title: string;
  visible?: boolean;
  visibleType: string;
  visibleValue: string;
  onVisibleTypeChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
  onVisibleTextChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onVisibleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CategoryVisibleTypeRow: React.FC<CategoryVisibleTypeRowsProps> = ({
  title,
  visible,
  visibleType,
  visibleValue,
  onVisibleTypeChange,
  onVisibleTextChange,
  onVisibleImageChange,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <CategoryRowItem
        title={title}
        content={
          <>
            <RadioGroup
              row
              value={visibleType}
              className={classes.radioGroup}
              onChange={onVisibleTypeChange}
            >
              <FormControlLabel
                control={<Radio />}
                value="text"
                label="텍스트"
                labelPlacement="end"
                disabled={!visible && visible !== undefined ? true : false}
              ></FormControlLabel>
              <FormControlLabel
                control={<Radio />}
                value="image"
                label="이미지"
                labelPlacement="end"
                disabled={!visible && visible !== undefined ? true : false}
              ></FormControlLabel>
            </RadioGroup>
            <OutlinedInput
              disabled={
                (!visible && visible !== undefined) || visibleType === 'image'
                  ? true
                  : false
              }
              value={visibleValue}
              onChange={(e) => onVisibleTextChange(e)}
            />
            <Button
              variant="contained"
              className={classes.button}
              component="label"
              disabled={
                (!visible && visible !== undefined) || visibleType === 'text'
                  ? true
                  : false
              }
            >
              파일찾기
              <input
                type="file"
                hidden
                onChange={(e) => onVisibleImageChange(e)}
              />
            </Button>
          </>
        }
      />
    </Box>
  );
};

export default CategoryVisibleTypeRow;
