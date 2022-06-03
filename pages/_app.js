import "../styles/globals.css";
import { GoogleAnalytics, usePagesViews } from "nextjs-google-analytics";

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
