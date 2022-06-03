import "../styles/globals.css";
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";

const MyApp = ({ Component, pageProps }) => {
  usePagesViews();

  return (
    <>
      <GoogleAnalytics strategy="lazyOnload" />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
