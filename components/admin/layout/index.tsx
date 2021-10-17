import React from "react";
import Head from "next/head";
import { ADMIN_PAGE_TITLE } from "../../../config/strings";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { defaultTheme } from "../../../config/theme";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./header"));
const SideBar = dynamic(() => import("./sidebar"));
const Footer = dynamic(() => import("./footer"));
const TabBar = dynamic(() => import("./tabbar"));
const NavBar = dynamic(() => import("./navbar"));

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
            <SideBar />
            <Box sx={{ width: "100%", overflow: "hidden" }}>
              <TabBar />
              <NavBar />
              <main>{children}</main>
            </Box>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default AdminLayout;
