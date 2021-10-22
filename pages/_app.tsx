import { AppProps } from "next/app";
import PageWrapper from "../components/PageWrapper";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </>
  );
}
