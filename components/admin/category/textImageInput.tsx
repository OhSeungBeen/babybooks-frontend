import React, { useState, useRef, useEffect } from 'react';
import {
  RadioGroup,
  FormControlLabel,
  OutlinedInput,
  Box,
  Radio,
  Button,
} from '@mui/material';
import {} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

interface TextImageInputProps {
  type: 'text' | 'image';
  text: string;
  image: string;
  disabled?: boolean;
  name?: string;
  onChange: (params: {
    name: string;
    values: { type: string; text: string; image: string };
  }) => void;
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
  const mounted = useRef(false);
  const classes = useStyles();

  const [values, setValues] = useState({ type, text, image });

  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    setValues({ type, text, image });
  }, [type, text, image]);

  useEffect(() => {
    if (!mounted.current) return;
    onChange({
      name: name || '',
      values,
    });
  }, [values, name, onChange]);

  useEffect(() => {
    mounted.current = true;
  }, []);

  return (
    <Box className={classes.container}>
      <RadioGroup
        row
        value={values.type}
        className={classes.radioGroup}
        onChange={(e) => onValueChange(e)}
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
        disabled={disabled || values.type === 'image'}
        value={values.type === 'text' ? values.text : values.image}
        onChange={(e) => onValueChange(e)}
        name="text"
      />
      <Button
        variant="contained"
        className={classes.button}
        component="label"
        disabled={disabled || values.type === 'text'}
      >
        파일찾기
        <input
          type="file"
          hidden
          onChange={(e) => onValueChange(e)}
          name="image"
        />
      </Button>
    </Box>
  );
};

export default TextImageInput;
