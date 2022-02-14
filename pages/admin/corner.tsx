import { GetServerSideProps } from 'next';
import React from 'react';
import { resetServerContext } from 'react-beautiful-dnd';

import '@mui/icons-material';
import '@mui/material';
import { makeStyles } from '@mui/styles';

import AdminLayout from '../../components/admin/layout';

const useStyles = makeStyles({});

const CornerPage = () => {
  const classes = useStyles();

  return <div>전시 코너 페이지</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  resetServerContext();
  return { props: { data: [] } };
};

CornerPage.layout = AdminLayout;
export default CornerPage;
