import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "../../styles/globals.css";
import { Inter } from "next/font/google";

// import nextI18NextConfig from '../next-i18next.config.js'
const inter = Inter({ subsets: ["latin"] });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className={`${inter.className}`}>
    <Component {...pageProps} />
  </div>
);

// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(MyApp /*, nextI18NextConfig */);
