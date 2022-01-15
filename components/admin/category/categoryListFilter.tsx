import React from 'react';
import { Select, MenuItem, Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { makeStyles } from '@mui/styles';

interface CategoryListFilterProps {
  fillterIndex: { use: string; visible: string };
  onFillterChange: (e: SelectChangeEvent, key: string) => void;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    marginBottom: '1rem',
  },
});

const CategoryListFilter: React.FC<CategoryListFilterProps> = ({
  fillterIndex,
  onFillterChange,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Select
        fullWidth
        size="small"
        value={fillterIndex.visible}
        onChange={(e) => onFillterChange(e, 'visible')}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={0}>메뉴노출여부 </MenuItem>
        <MenuItem value={1}>메뉴노출여부 Y</MenuItem>
        <MenuItem value={2}>메뉴노출여부 N</MenuItem>
      </Select>
      <Select
        fullWidth
        size="small"
        value={fillterIndex.use}
        onChange={(e) => onFillterChange(e, 'use')}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={0}>메뉴사용여부</MenuItem>
        <MenuItem value={1}>메뉴사용여부 Y</MenuItem>
        <MenuItem value={2}>메뉴사용여부 N</MenuItem>
      </Select>
    </Box>
  );
};

export default CategoryListFilter;
