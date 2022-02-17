import { GetServerSideProps } from 'next';
import React from 'react';
import { resetServerContext } from 'react-beautiful-dnd';

import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import AdminDefaultLayout from '../../components/admin/layout/adminDefaultLayout';
import CategoryContainer from '../../container/admin/category/categoryContainer';
import CategoryListContainer from '../../container/admin/category/categoryListContainer';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  categoryList: {
    flex: 1,
    padding: '1rem',
    border: 'solid 1px',
  },
  cateogoryInfo: {
    flex: 2,
    padding: '1rem',
    border: 'solid 1px',
  },
});

const CategoryPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.categoryList}>
        <CategoryListContainer />
      </Box>
      <Box className={classes.cateogoryInfo}>
        <CategoryContainer />
      </Box>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  resetServerContext();
  return { props: { data: [] } };
};

CategoryPage.layout = AdminDefaultLayout;
export default CategoryPage;
