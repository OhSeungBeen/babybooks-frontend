import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import { resetServerContext } from 'react-beautiful-dnd';

const AdminLayout = dynamic(
  () => import('components/admin/layout/adminDefaultLayout')
);

const AdminPage = () => {
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  resetServerContext();
  return { props: { data: [] } };
};

AdminPage.layout = AdminLayout;

export default AdminPage;
