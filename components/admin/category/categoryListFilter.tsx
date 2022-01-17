import React, { useState, useEffect } from 'react';
import { Select, MenuItem, Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { makeStyles } from '@mui/styles';

interface CategoryListFilterProps {
  onChange: (param: { visible: number; use: number }) => void;
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
  onChange,
}) => {
  const classes = useStyles();

  const [indexs, setIndexs] = useState({ visible: 0, use: 0 });

  const onChangeSelect = (e: SelectChangeEvent<number>) => {
    setIndexs({ ...indexs, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    onChange(indexs);
  }, [indexs]);

  return (
    <Box className={classes.container}>
      <Select
        fullWidth
        size="small"
        value={indexs.visible}
        name="visible"
        onChange={(e) => onChangeSelect(e)}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={0}>메뉴노출여부 </MenuItem>
        <MenuItem value={1}>메뉴노출여부 Y</MenuItem>
        <MenuItem value={2}>메뉴노출여부 N</MenuItem>
      </Select>
      <Select
        fullWidth
        size="small"
        name="use"
        value={indexs.use}
        onChange={(e) => onChangeSelect(e)}
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
