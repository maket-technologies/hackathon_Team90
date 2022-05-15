import { useEffect } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Button, Box, Card, Container, Divider, Link, Typography } from '@mui/material';
import { FirebaseRegister } from '../../components/authentication/firebase-register';
import { Logo } from '../../components/logo';
import { gtm } from '../../lib/gtm';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  signupbg: {
      padding:'20px',
      // minHeight:'580px',
      backgroundPosition:'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundImage: "url(" + "https://images.unsplash.com/photo-1509326066092-14b2e882fe86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"+")" 
  }
  
});

const Register = () => {
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
          Register
        </title>
      </Head>
      <Box
        className={classes.signupbg}
        component="main"
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Box>
          <NextLink
          href="/"
          passHref
          >
            <Button
              sx={{ m: 1.5 }}
              component="a"
              variant="text"
            >
            <ArrowBackOutlinedIcon/>
            </Button>
          </NextLink>
        </Box>
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
                Sign Up
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3
              }}
            >
            {/* we are using firebase to authenticates signup and login */}
              <FirebaseRegister />
            </Box>
            <Divider sx={{ my: 3 }} />
            <NextLink
              href={disableGuard
                ? `/?disableGuard=${disableGuard}`
                : '/'}
              passHref
            >
            <Typography variant="body2">
                Aleady have an account?
              
              <Link
                color="textSecondary"
                variant="body2"
              >
                  Login
              </Link>
              </Typography>
            </NextLink>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Register;