import "@styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "ui/themes/theme";
import Head from "next/head";
import { Header } from "ui/components/surfaces/Header";
import { Footer } from "ui/components/Footer";
import { AppContainer } from "ui/styles/pages/app-style";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>e-diaristas</title>
     </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Component {...pageProps} />
          <Footer></Footer>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
