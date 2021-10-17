import React, { useEffect } from "react";
import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import { Provider, useStore } from "react-redux";
import { ThemeProvider } from "@mui/private-theming";
import { defaultTheme } from "../config/theme";
import { wrapper } from "../redux/store";

function WrappedApp({ Component, pageProps }: AppProps) {
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
        <Component {...pageProps} />
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
