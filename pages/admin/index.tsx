import React from "react";
import { connect } from "react-redux";
import { State } from "../../types";
import dynamic from "next/dynamic";
import Dialog from "../../components/admin/dialog";
import { DialogAction } from "../../redux/actions";

const AdminLayout = dynamic(() => import("../../components/admin/layout"));

function AdminPage(props: any) {
  const { dialog, dispatch } = props;

  const DialogOpen = (event: React.SyntheticEvent) => {
    dispatch(DialogAction.open("default"));
  };

  return (
    <AdminLayout>
      <>Admin page</>
      <a onClick={DialogOpen}>Dialog</a>
      <Dialog isOpen={dialog.default.isOpen} />
    </AdminLayout>
  );
}

function mapStateToProps(state: State) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(AdminPage);
