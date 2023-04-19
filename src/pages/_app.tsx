import type { AppProps } from 'next/app';
import { GlobalStyle } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {
  // ... 사용자 정의 theme code
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
