import { useEffect } from "react";
import "../assets/scss/index.scss";
import Public from "../layout/Public";
import Providers from "../store/Providers";
import "react-datepicker/dist/react-datepicker.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }) {
  ``;
  // Use the layout defined at the page level, if available
  const Layout = Component.Layout || Public;
  useEffect(() => {
    require("../assets/scss/index.scss");
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
