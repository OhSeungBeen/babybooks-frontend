import Head from "next/head";
import Header from "../header";
import { ADMIN_PAGE_TITLE } from "../../../config/strings";
import { Container } from "@mui/material";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{ADMIN_PAGE_TITLE}</title>
      </Head>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default AdminLayout;
