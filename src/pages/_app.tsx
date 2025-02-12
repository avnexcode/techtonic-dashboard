import { type NextPage } from "next";
import { type AppProps, type AppType } from "next/app";

import { AppProvider } from "@/components/layouts/AppProvider";
import "@/styles/globals.css";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>;
};

export default MyApp;
