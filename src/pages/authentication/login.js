import { useEffect } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Button, Box, Card, Container, Divider, Link, Typography } from '@mui/material';
import { FirebaseLogin } from '../../components/authentication/firebase-login';
import { Logo } from '../../components/logo';
import { gtm } from '../../lib/gtm';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  backgroundImg: {
      padding:'20px',
      minHeight:'580px',
      backgroundPosition:'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundImage: "url(" + "https://images.unsplash.com/photo-1629948618343-0d33f97a3091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80"+")" 
  }
  
});

const Login = () => {
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
          Login
        </title>
      </Head>
      <Box
        component="main"
        className={classes.loginbg}
        sx={{
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
                Log in
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
    </>
  );
};

export default Login;