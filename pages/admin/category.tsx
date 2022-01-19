import React from 'react';
import { GetServerSideProps } from 'next';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { resetServerContext } from 'react-beautiful-dnd';
import AdminLayout from 'components/admin/layout';
import CategoryListContainer from 'container/admin/category/categoryListContainer';
import CtegoryContainer from 'container/admin/category/categoryContainer';

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
        <CtegoryContainer />
      </Box>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  resetServerContext();
  return { props: { data: [] } };
};

CategoryPage.layout = AdminLayout;
export default CategoryPage;
