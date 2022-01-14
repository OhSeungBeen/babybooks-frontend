import React, { useRef } from 'react';
import {
  Radio,
  FormControlLabel,
  RadioGroup,
  Box,
  Input,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import CategoryRowItem from './categoryRowItem';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    '& .MuiFormGroup-root': {},
  },
  input: {
    border: 'solid 1px',
    borderRadius: '4px',
    fontSize: '0.875rem',
    '& input': {
      padding: '0.3rem 0.6rem',
    },
  },
  button: {
    fontSize: '0.775rem',
    marginLeft: '0.5rem',
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

  const input = useRef<HTMLElement>();

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
            <Input
              ref={input}
              className={classes.input}
              disableUnderline
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
