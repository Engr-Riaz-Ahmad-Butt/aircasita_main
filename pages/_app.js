import { useEffect } from "react";
import Default from "../layout/Default";
import "../assets/scss/index.scss";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";

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
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default wrapper.withRedux(MyApp);
