import React from 'react';
import { connect } from 'react-redux';
import { GetServerSideProps } from 'next';
import { resetServerContext } from 'react-beautiful-dnd';
import { State } from '../../types';
import AdminLayout from '../../components/admin/layout';

function AdminPage(props: any) {
  const { dialog, dispatch } = props;

  return <div>Admin page</div>;
}

function mapStateToProps(state: State) {
  return {
    ...state,
  };
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  resetServerContext();
  return { props: { data: [] } };
};

AdminPage.layout = AdminLayout;
export default connect(mapStateToProps)(AdminPage);
