import React from "react";
import { connect } from "react-redux";
import { State } from "../../types";
import dynamic from "next/dynamic";

const AdminLayout = dynamic(() => import("../../components/admin/layout"));

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
