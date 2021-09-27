import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import { store } from "../app/store";
//font awesome icons//
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
//telling font awesome to skip adding css
//since its being imported above
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/vidalIcon.png"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
