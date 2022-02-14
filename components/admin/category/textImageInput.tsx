import React from 'react';

import {
  Box,
  Button,
  FormControlLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

interface TextImageInputProps {
  type: 'text' | 'image';
  text: string;
  image: string;
  disabled?: boolean;
  name?: string;
  onChange: (
    name: string,
    inputName: string,
    value: string | 'text' | 'image'
  ) => void;
}

const useStyles = makeStyles({
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
});

const TextImageInput: React.FC<TextImageInputProps> = ({
  type,
  text,
  image,
  disabled = false,
  name,
  onChange,
}) => {
  const classes = useStyles();

  const onLocalChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(name, e.target.name, e.target.value);
  };

  return (
    <Box className={classes.container}>
      <RadioGroup
        row
        value={type}
        className={classes.radioGroup}
        onChange={(e) => onLocalChange(e)}
        name="type"
      >
        <FormControlLabel
          control={<Radio />}
          value="text"
          label="텍스트"
          labelPlacement="end"
          disabled={disabled}
        ></FormControlLabel>
        <FormControlLabel
          control={<Radio />}
          value="image"
          label="이미지"
          labelPlacement="end"
          disabled={disabled}
        ></FormControlLabel>
      </RadioGroup>
      <OutlinedInput
        disabled={disabled || type === 'image'}
        value={type === 'text' ? text : image}
        onChange={(e) => onLocalChange(e)}
        name="text"
      />
      <Button
        variant="contained"
        className={classes.button}
        component="label"
        disabled={disabled || type === 'text'}
      >
        파일찾기
        <input
          type="file"
          hidden
          onChange={(e) => onLocalChange(e)}
          name="image"
        />
      </Button>
    </Box>
  );
};

export default TextImageInput;
