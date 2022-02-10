import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ErrorBoundary } from "src/ErrorBoundary";
import dynamic from "next/dynamic";

export default function MyApp({ Component, pageProps }: AppProps) {
  const NoSSR = dynamic(() => import("src/components/NoSSR"));

  return (
    <NoSSR>
      <RecoilRoot>
        <ErrorBoundary fallback={<p>error</p>}>
          <Component {...pageProps} />
        </ErrorBoundary>
      </RecoilRoot>
    </NoSSR>
  );
}
