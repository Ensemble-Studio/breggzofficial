import { useCookie } from "../src/lib/CookieProvider";

import Cookie from "../src/components/Cookie";
import Script from 'next/script';
import StayTuned from "../src/components/StayTuned";
import Render from "../src/components/Render";
const Home = () => {
  const cookieAccepted = useCookie();

  return (
    <div className='w-screen h-screen bg-pearl fixed top-0 left-0'>
         
     {cookieAccepted &&
<Script
 id="pixelscript"
strategy="afterInteractive"
dangerouslySetInnerHTML={{
__html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1387297948449771'); 
fbq('track', 'PageView');
`,
}}
/>}
      {cookieAccepted && <StayTuned />}
      <div className='w-screen h-screen '>
        <Render />
      </div>
      <Cookie />
    </div>
  );
};

export default Home;
