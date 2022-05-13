import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Container, Divider, Tab, Tabs, Typography } from '@mui/material';
import { gtm } from '../../lib/gtm';


const Dashboard = () => {

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Dashboard
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          display: 'flex'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4">
            Dashboard
          </Typography>
          <Divider sx={{ mb: 3 }} />
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;