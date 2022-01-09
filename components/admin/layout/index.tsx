import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ADMIN_PAGE_TITLE } from "config/strings";
import { defaultTheme } from "config/theme";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { ReactElement } from "react";
import { connectState } from "redux/store";
import { ComponentProps } from "types";

const Header = dynamic(() => import("./header"));
const SideBar = dynamic(() => import("./sidebar"));
const Footer = dynamic(() => import("./footer"));
const TabBar = dynamic(() => import("./tabbar"));
const Breadcrumb = dynamic(() => import("./breadcrumb"));

function AdminLayout(props: ComponentProps): ReactElement {
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
              <Breadcrumb />
              <main>{children}</main>
            </Box>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default connectState(AdminLayout);
