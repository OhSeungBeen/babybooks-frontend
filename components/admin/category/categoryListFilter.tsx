import React from 'react';
import { Select, MenuItem, Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    marginBottom: '1rem',
  },
});

const CategoryListFilter: React.FC = () => {
  const classes = useStyles();

  const [showMenuIndex, setShowMenuIndex] = React.useState(0);
  const [useMenuIndex, setUseMenuIndex] = React.useState(0);

  const onShowMenuSelectChange = (
    e: SelectChangeEvent<typeof showMenuIndex>
  ) => {
    setShowMenuIndex(e.target.value as number);
  };

  const onUseMenuSelectChange = (
    e: SelectChangeEvent<typeof showMenuIndex>
  ) => {
    setUseMenuIndex(e.target.value as number);
  };

  return (
    <Box className={classes.container}>
      <Select
        fullWidth
        size="small"
        value={showMenuIndex}
        onChange={onShowMenuSelectChange}
        inputProps={{ 'aria-label': 'Without label' }}
        renderValue={showMenuIndex !== -1 ? null : () => <>메뉴노출여부</>}
      >
        <MenuItem value={0}>메뉴노출여부 Y</MenuItem>
        <MenuItem value={1}>메뉴노출여부 N</MenuItem>
      </Select>
      <Select
        fullWidth
        size="small"
        value={useMenuIndex}
        onChange={onUseMenuSelectChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        renderValue={useMenuIndex !== -1 ? null : () => <>메뉴사용여부</>}
      >
        <MenuItem value={0}>메뉴사용여부 Y</MenuItem>
        <MenuItem value={1}>메뉴사용여부 N</MenuItem>
      </Select>
    </Box>
  );
};

export default CategoryListFilter;
