import "../styles/globals.css";
import Script from "next/script";
import { Fragment } from "react";

// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-119JDZXFHR"></script>
// <script>
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());

  // gtag('config', 'G-119JDZXFHR');
// </script>

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Script 
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} 
      strategy="afterInteractive" />
      <Script
      id="google-analytics-script"
      strategy="afterInteractive"
       >{`  
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());

       gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');

       `}
       </Script>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
