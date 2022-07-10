/* eslint-disable @next/next/no-img-element */
import "../src/styles/globals.css";
import CookieProvider from "../src/lib/CookieProvider";
import Head from 'next/head';



function MyApp({ Component, pageProps }) {
  
  return (

    <CookieProvider>
  
<Head>

<noscript>
<img height="1" width="1" 
src="https://www.facebook.com/tr?id=1387297948449771&ev=PageView
&noscript=1"/>
</noscript>
  <title>BREGGZ</title>
  <meta
    name="viewport"
    content="minimum-scale=1, initial-scale=1, width=device-width"
  />
  <link rel="icon" href="/favicon.png" />
</Head>
      <Component {...pageProps} />
    </CookieProvider>
  );
}

export default MyApp;
