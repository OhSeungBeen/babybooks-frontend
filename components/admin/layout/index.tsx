import React from "react";
import Head from "next/head";
import { ADMIN_PAGE_TITLE } from "../../../config/strings";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { defaultTheme } from "../../../config/theme";

import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

function AdminLayout(props: any) {
  const { children } = props;
  return (
    <>
      <Head>
        <title>{ADMIN_PAGE_TITLE}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content={defaultTheme.palette.primary.main} />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
          <Header />
          <Box sx={{ display: "flex" }}>
            <Sidebar />
            <main>{children}</main>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default AdminLayout;
