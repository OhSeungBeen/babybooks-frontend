import React from "react";
import Head from "next/head";
import { ADMIN_PAGE_TITLE } from "../../../config/strings";
import { CssBaseline, ThemeProvider, AppBar, Toolbar } from "@mui/material";
import { defaultTheme } from "../../../config/theme";

import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { Box } from "@mui/system";

export default class AdminLayout extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>{ADMIN_PAGE_TITLE}</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta
            name="theme-color"
            content={defaultTheme.palette.primary.main}
          />
        </Head>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
            <AppBar position="relative">
              <Toolbar>
                <Header />
              </Toolbar>
            </AppBar>
            <Box sx={{ display: "flex" }}>
              <Sidebar />
              <main>{this.props.children}</main>
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </>
    );
  }
}
