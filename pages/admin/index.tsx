import React from "react";
import { connect } from "react-redux";
import AdminLayout from "../../components/admin/layout";
import { State } from "../../types";

function AdminPage(props: any) {
  return (
    <AdminLayout>
      <>Admin page</>
    </AdminLayout>
  );
}

function mapStateToProps(state: State) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(AdminPage);
