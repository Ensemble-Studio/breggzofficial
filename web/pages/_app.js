/* eslint-disable @next/next/no-img-element */
import "../src/styles/globals.css";
import CookieProvider from "../src/lib/CookieProvider";
import SubscribeProvider from "../src/lib/SubscribeProvider"
import AnimationProvider from "../src/lib/AnimationProvider"
import Head from 'next/head';




function MyApp({ Component, pageProps }) {
  
  return (

    <AnimationProvider>
    <CookieProvider>
    
      <SubscribeProvider>
        
  
<Head>

<noscript>
<img height="1" width="1" 
src="https://www.facebook.com/tr?id=1387297948449771&ev=PageView
&noscript=1"/>
</noscript>
  <title>BREGGZ</title>
  <meta property="og:title" content={`BREGGZ | For Your Ears Only`} />
      <meta property="og:site_name" content={`BREGGZ`} />
      <meta property="og:image" content="https://breggzcom.vercel.app/ogImage.png" />
  <meta
    name="viewport"
    content="minimum-scale=1, initial-scale=1, width=device-width"
  />
  <meta name="facebook-domain-verification" content="ezvrj6j3a4t6vmoeb9ymmd77ebp6sz" />

  <link rel="icon" href="/favicon.png" />
  <link rel="icon" href="./breggz.svg" type="image/svg+xml" />

</Head>
      <Component {...pageProps} />
      </SubscribeProvider>
    </CookieProvider>
    </AnimationProvider>
  );
}

export default MyApp;
