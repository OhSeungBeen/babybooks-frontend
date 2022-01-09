import React from 'react';
import { GetServerSideProps } from 'next';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { resetServerContext } from 'react-beautiful-dnd';
import AdminLayout from '../../components/admin/layout';
import CategoryInfo from '../../components/admin/category/categoryInfo';
import CategoryHeader from '../../components/admin/category/categoryHeader';
import CategoryListFilter from '../../components/admin/category/categoryListFilter';
import CategoryList from '../../components/admin/category/categoryList';

const useStyles = makeStyles({
  categoryWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  categorySection: {
    flex: 1,
    padding: '1rem',
    border: 'solid 1px',
  },
});

const category = () => {
  const classes = useStyles();

  return (
    <Box className={classes.categoryWrapper}>
      <Box className={classes.categorySection}>
        <CategoryHeader title="전시카테고리" buttonText="추가" />
        <CategoryListFilter />
        <CategoryList />
      </Box>
      <Box className={classes.categorySection}>
        <CategoryHeader title="카테고리 정보" buttonText="수정" />
        <CategoryInfo />
      </Box>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  resetServerContext();
  return { props: { data: [] } };
};

category.layout = AdminLayout;
export default category;
