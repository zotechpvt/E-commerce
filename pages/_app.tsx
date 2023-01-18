import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../src/components/layout/mainLayout";
import "../styles/header.scss";
import "../styles/promotions.scss";
import "../styles/banner.scss";
import "../styles/womenBanner.scss";
import "../styles/dealOfWeek.scss";
import "../styles/menBanner.scss";
import "../styles/instagramPhoto.scss";
import "../styles/blog.scss";
import "../styles/benefitItems.scss";
import "../styles/partnersLogo.scss";
import "../styles/footer.scss";
import "../styles/shoppingcart.scss";
import "../styles/checkout.scss";
import "../styles/contact.scss";
import "../styles/faqs.scss";
import { store } from "../src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </MainLayout>
    </Provider>
  );
}
