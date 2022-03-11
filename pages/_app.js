import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://yghmxlknwoor.usemoralis.com:2053/server"
      appId="lZKSPr2064DVCU6NqFCAIWg4zpmnQt2tEKnXO4Rh"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
