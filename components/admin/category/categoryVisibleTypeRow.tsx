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
    flexShrink: 0,
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
  visibleType: string;
}

const CategoryVisibleTypeRow: React.FC<CategoryVisibleTypeRowsProps> = ({
  title,
  visibleType,
}) => {
  const classes = useStyles();

  const input = useRef<HTMLElement>();

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    (input.current.children[0] as HTMLInputElement).value =
      e.target.files[0].name;
  };

  return (
    <Box className={classes.container}>
      <CategoryRowItem
        title={title}
        content={
          <>
            <RadioGroup
              row
              defaultValue="text"
              className={classes.radioGroup}
              //  onChange={}
            >
              <FormControlLabel
                control={<Radio />}
                value="text"
                label="텍스트"
                labelPlacement="end"
              ></FormControlLabel>
              <FormControlLabel
                control={<Radio />}
                value="image"
                label="이미지"
                labelPlacement="end"
              ></FormControlLabel>
            </RadioGroup>
            <Input ref={input} className={classes.input} disableUnderline />
            <Button
              variant="contained"
              className={classes.button}
              component="label"
            >
              파일찾기
              <input type="file" hidden onChange={(e) => onInput(e)} />
            </Button>
          </>
        }
      />
    </Box>
  );
};

export default CategoryVisibleTypeRow;
