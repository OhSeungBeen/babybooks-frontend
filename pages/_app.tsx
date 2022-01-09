import { ThemeProvider } from "@mui/private-theming";
import { defaultTheme } from "config/theme";
import { NextPage } from "next";
import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import React, { useEffect } from "react";
import { Provider, useStore } from "react-redux";
import { wrapper } from "redux/store";

export type NextPageWithLayout = NextPage & {
  layout?: () => JSX.Element;
};

export type WrappedAppProps = AppProps & {
  Component: NextPageWithLayout;
};

export interface NoneLayoutProps {
  children: React.ReactNode;
}

function WrappedApp({ Component, pageProps }: WrappedAppProps) {
  const Layout =
    Component.layout || (({ children }: NoneLayoutProps) => <>{children}</>);
  const store = useStore();

  useEffect(() => {
    removeServerSideInjectedCSS();
  }, []);

  const removeServerSideInjectedCSS = () => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ThemeProvider>
    </Provider>
  );
}

WrappedApp.getInitialProps = async (
  appContext: AppContext
): Promise<AppInitialProps> => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default wrapper.withRedux(WrappedApp);
