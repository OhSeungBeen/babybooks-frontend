import React, { useState } from 'react';
import {
  Box,
  Typography,
  Dialog,
  IconButton,
  Button,
  OutlinedInput,
  Theme,
  Divider,
} from '@mui/material';
import { Close, Add } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

interface CategoryAddProps {
  open: boolean;
  placeholder: { input: string; header: string[] };
  onConfirm: () => void;
  onCancel: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  dialogPaper: {
    padding: '1rem',
    width: '30rem',
    minWidth: '30rem',
    '& hr': {
      marginBottom: '1rem',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& p': {
      fontWeight: 'bold',
    },
  },
  addArea: {
    display: 'flex',
    '& button': {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '4px',
      marginRight: '0.3rem',
    },
    '& button:hover': {
      backgroundColor: '#434343',
    },
    marginBottom: '0.5rem',
  },
  input: {
    flex: 1,
    marginRight: '0.5rem',
  },
  description: {
    marginBottom: '0.8rem',
  },
  confirmCancle: {
    display: 'flex',
    justifyContent: 'center',
    '& button': {
      width: '5rem',
      marginRight: '0.5rem',
    },
    marginBottom: '0.8rem',
  },
  placehoderHeader: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
}));

const CategoryAdd: React.FC<CategoryAddProps> = ({
  open,
  placeholder,
  onConfirm,
  onCancel,
}) => {
  const classes = useStyles();

  const [values, setValues] = useState(['']);

  const onAdd = (index: number) => {
    if (values.length < 10) {
      setValues([
        ...values.slice(0, index + 1),
        '',
        ...values.slice(index + 1),
      ]);
    }
  };

  const onDelete = (index: number) => {
    if (values.length > 1) {
      setValues([...values.slice(0, index), ...values.slice(index + 1)]);
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    setValues([
      ...values.slice(0, index),
      e.target.value,
      ...values.slice(index + 1),
    ]);
  };

  const onInitConfirm = () => {
    setValues(['']);
    onConfirm();
  };

  const onInitCancel = () => {
    setValues(['']);
    onCancel();
  };

  return (
    <Dialog
      fullWidth={true}
      open={open}
      PaperProps={{ className: classes.dialogPaper }}
    >
      <Box className={classes.header}>
        <Typography>카테고리 추가</Typography>
        <IconButton onClick={onInitCancel}>
          <Close fontSize="inherit" />
        </IconButton>
      </Box>
      <Divider />
      {placeholder.header &&
        placeholder.header.map((header, index) => (
          <Typography key={index} className={classes.placehoderHeader}>
            {index === 0 ? `[대] ${header}` : `[중] ${header}`}
          </Typography>
        ))}
      {values.map((value, index) => (
        <Box key={index} className={classes.addArea}>
          <OutlinedInput
            inputProps={{ maxLength: 20 }}
            size="small"
            placeholder={placeholder.input}
            className={classes.input}
            value={value}
            onChange={(e) => onChange(e, index)}
          />
          <IconButton onClick={() => onAdd(index)}>
            <Add />
          </IconButton>
          <IconButton onClick={() => onDelete(index)}>
            <Close />
          </IconButton>
        </Box>
      ))}
      <Typography variant="body2" className={classes.description}>
        한번에 최대 10개까지 추가 가능합니다.
        <br />
        추가는 +, 삭제는 x를 클릭하세요.
      </Typography>
      <Box className={classes.confirmCancle}>
        <Button variant="outlined" onClick={onInitConfirm}>
          확인
        </Button>
        <Button variant="outlined" onClick={onInitCancel}>
          취소
        </Button>
      </Box>
    </Dialog>
  );
};

export default CategoryAdd;
