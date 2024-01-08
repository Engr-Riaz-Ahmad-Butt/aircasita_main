import { useEffect } from "react";
import "../assets/scss/index.scss";
import Default from "../layout/Default";
import Providers from "../store/Providers";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const Layout = Component.Layout || Default;
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
export default MyApp;
