import { useEffect } from 'react';
import Head from 'next/head';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { CacheProvider } from '@emotion/react';
import { Dashboard } from '../components/dashboard';


const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          Sustainable
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <h1>Hello</h1>
      {/* <Component {...pageProps}/>
      <Dashboard/> */}
    </CacheProvider>

  );
};

export default App;
