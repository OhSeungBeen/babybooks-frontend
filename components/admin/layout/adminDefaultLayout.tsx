import { ADMIN_PAGE_TITLE } from 'config/strings';
import { defaultTheme } from 'config/theme';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

import {
  Box,
  Container,
  CssBaseline,
  Theme,
  ThemeProvider,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { SideBar } from 'modules/app';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';

const Header = dynamic(() => import('../base/header'));
const SideBar = dynamic(() => import('../base/sidebar/sidebar'));
const Footer = dynamic(() => import('../base/footer'));
const TabBar = dynamic(() => import('../base/linkTabBar/linkTabBar'));
const Navigation = dynamic(() => import('../base/navigation'));

interface StyleProps {
  sideBar: SideBar;
  headerHeight: string;
  footerHeight: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100vh',
    overflow: 'hidden',
  },
  header: {
    height: (props: StyleProps) => props.headerHeight,
  },
  main: {
    minHeight: (props: StyleProps) =>
      `calc(100% - ${props.headerHeight} - ${props.footerHeight})`,
    maxHeight: (props: StyleProps) =>
      `calc(100% - ${props.headerHeight} - ${props.footerHeight})`,
    display: 'flex',
  },
  sidebar: {
    width: (props: StyleProps) =>
      props.sideBar.isShow ? props.sideBar.width : '0px',
    transition: 'width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
    border: `1px solid ${theme.palette.primary.main}`,
    boxSizing: 'border-box',
  },
  content: {
    width: (props: StyleProps) =>
      props.sideBar.isShow ? `calc(100vw - ${props.sideBar.width})` : '100vw',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  footer: {
    height: '40px',
  },
}));

const AdminLayout: React.FC = ({ children }) => {

  const sideBar = useSelector((state: RootState) => state.app.sideBar);
  const header = useSelector((state: RootState) => state.app.header);
  const footer = useSelector((state: RootState) => state.app.footer);

  const classes = useStyles({
    sideBar,
    headerHeight: header.height,
    footerHeight: footer.height,
  });

  return (
    <>
      <Head>
        <title>{ADMIN_PAGE_TITLE}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content={defaultTheme.palette.primary.main} />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Box className={classes.container}>
          {/* HEADER */}
          <Box className={classes.header}>
            <Header />
          </Box>
          <Box className={classes.main}>
            {/* SIDEBAR */}
            <Box className={classes.sidebar}>{<SideBar />}</Box>
            {/* CONTENT */}
            <Box className={classes.content}>
              <TabBar />
              <Navigation />
              <Container fixed sx={{ minWidth: '950px' }}>
                {children}
              </Container>
            </Box>
          </Box>
          {/* FOOTER */}
          <Box className={classes.footer}>
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default AdminLayout;
