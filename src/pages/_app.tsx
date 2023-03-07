import type { AppProps } from 'next/app';
import './_app.css';
import { GlobalStyle } from 'styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
