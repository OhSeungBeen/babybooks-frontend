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
  categoryNames: string[];
  onAdd: (index: number) => void;
  onDelete: (index: number) => void;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const useStyles = makeStyles((Theme: Theme) => ({
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
      backgroundColor: Theme.palette.primary.main,
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
}));

const CategoryAdd: React.FC<CategoryAddProps> = ({
  open,
  categoryNames,
  onInputChange,
  onAdd,
  onDelete,
  onConfirm,
  onCancel,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      fullWidth={true}
      open={open}
      PaperProps={{ className: classes.dialogPaper }}
    >
      <Box className={classes.header}>
        <Typography>카테고리 추가</Typography>
        <IconButton onClick={onCancel}>
          <Close fontSize="inherit" />
        </IconButton>
      </Box>
      <Divider />
      {categoryNames.map((categoryName, index) => (
        <Box key={index} className={classes.addArea}>
          <OutlinedInput
            size="small"
            placeholder=""
            className={classes.input}
            value={categoryName}
            onChange={(e) => onInputChange(e, index)}
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
        <Button variant="outlined" onClick={onConfirm}>
          확인
        </Button>
        <Button variant="outlined" onClick={onCancel}>
          취소
        </Button>
      </Box>
    </Dialog>
  );
};

export default CategoryAdd;
