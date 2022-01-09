import Dialog from "components/admin/dialog";
import dynamic from "next/dynamic";
import React from "react";
import { DialogAction } from "redux/actions";
import { connectState } from "redux/store";
import { State, ComponentProps } from "types";

const AdminLayout = dynamic(() => import("components/admin/layout"));

function AdminPage(props: ComponentProps) {
  const { state, dispatch } = props;

  const DialogOpen = (event: React.SyntheticEvent) => {
    dispatch(DialogAction.open("default"));
  };

  return (
    <AdminLayout>
      <>Admin page</>
      <a onClick={DialogOpen}>Dialog</a>
      {state.dialog.default ? (
        <Dialog isOpen={state.dialog.default.isOpen} />
      ) : null}
    </AdminLayout>
  );
}

function mapStateToProps(state: State) {
  return {
    ...state,
  };
}

export default connectState(AdminPage);
