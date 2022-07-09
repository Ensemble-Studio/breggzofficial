import "../src/styles/globals.css";

import CookieProvider from "../src/lib/CookieProvider";
function MyApp({ Component, pageProps }) {
  return (
    <CookieProvider>
      <Component {...pageProps} />
    </CookieProvider>
  );
}

export default MyApp;
