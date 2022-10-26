import { Provider } from "react-redux";
import store from "../redux/store";

import HomeLayout from "../components/layout/HomeLayout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </Provider>
  );
}

export default MyApp;
