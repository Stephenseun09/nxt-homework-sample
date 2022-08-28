import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import Head from "next/head";

// --------- Styles ------////
////////////////////////////////////////////////////////////////////////////////
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../styles/globals.css";
/// //////////////////////////////////////////////////////////////////////////////

//--------------NProgress-----------
// NProgress.configure({
//   minimum: 0.3,
//   easing: "ease",
//   speed: 500,
//   showSpinner: false,
// });

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Head>
        <title>BetaCare</title>

        {/* <meta name="description" content="Betacare" />
        <meta name="theme-color" content='' />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Betacare" />
        <meta property="og:description" content="Betacare " />
        <meta property="og:site_name" content="Betacare" /> */}
        {/* <link rel="icon" href="/betacare-icon.svg" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
