import { useEffect } from 'react';
import Head from 'next/head';
import { gtm } from '../lib/gtm';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Card, Container, Divider, Link, Typography } from '@mui/material';
import { FirebaseLogin } from '../components/authentication/firebase-login';
import { Logo } from '../components/logo';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  loginbg: {
      padding:'20px',
      // minHeight:'580px',
      backgroundPosition:'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundImage: "url(" + "https://images.unsplash.com/photo-1509326066092-14b2e882fe86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"+")" 
  }
  
});

const Home = () => {
  const router = useRouter();
  const { disableGuard } = router.query;
  const classes = useStyles();


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
      <Box
        className={classes.loginbg}
        component="main"
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            py: {
              xs: '60px'
            }
          }}
        >
          <Card
            elevation={16}
            sx={{ p: 4 }}
          >
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >

              <Typography variant="h4">
                LOG IN
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3
              }}
            >
              {/* we are using firebase to authenticates signup and login */}
              <FirebaseLogin />
            </Box>
            <Divider sx={{ my: 3 }} />
            
            <Box
              sx={{
                display:'flex',
                justifyContent: 'space-between',
              }}
            >
              {/* redirect to the sign up page */}
            <NextLink
              href={disableGuard
                ? `/authentication/register?disableGuard=${disableGuard}`
                : '/authentication/register'}
              passHref
            >
              <Link
                color="textSecondary"
                variant="body2"
              >
                Create new account
              </Link>
            </NextLink>
            </Box>
          </Card>
        </Container>
      </Box>
      </main>
    </>
  );
};

export default Home;