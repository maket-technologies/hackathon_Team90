import { useEffect } from 'react';
import Head from 'next/head';
import { Divider } from '@mui/material';
import { HomeHero } from '../components/home/home-hero';
import { gtm } from '../lib/gtm';

const Home = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
        Sustainable
        </title>
      </Head>
      <main>
        <HomeHero />
        <Divider />
      </main>
    </>
  );
};

export default Home;