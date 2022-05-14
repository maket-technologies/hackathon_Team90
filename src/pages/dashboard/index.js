import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import { gtm } from '../../lib/gtm';
import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Resource from '../../components/resource'
import Profile from "../../components/profile"

const useStyles = makeStyles({
  MuiContainer: {
    '@media (min-width: 1200px)': {
      maxWidth: "1460px"
    }
  },
  tab: {
    padding:"20px",
    fontSize:20,
    marginLeft:24,
    border: "1px solid #000",
    borderRadius: "11px",
    minHeight: "100px",
    marginRight: "10px",
    marginBottom: "20px",
    // maxWidth: "140px",
    // width: "100%"
  },
  backgroundImg: {
    padding:'20px',
        minHeight:'580px',
        backgroundPosition:'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundImage: "url(" + "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"+")" 
  }
  
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Dashboard = (props) => {

  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const data = [
    {
    title: "Title",
    type : "non-academic",
    link : "http://www.google.com",
    image : "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
  },
  {
  title: "Title",
  type : "academic",
  link : "http://www.google.com",
  image : "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
},
{
title: "Title",
type : "non-academic",
link : "http://www.google.com",
image : "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
},
{
title: "Title",
type : "academic",
link : "http://www.google.com",
image : "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
},
{
title: "Title",
type : "academic",
link : "http://www.google.com",
image : "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
},
]
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        className={classes.backgroundImg}
      >
      <Container 
      maxWidth={false}
      sx={{ p:2}}
      >
        <Box
      sx={{ flexGrow: 1, 
        // bgcolor: 'background.paper', 
        display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width:190, }}
      >
        <Tab className={classes.tab} label="Chat" {...a11yProps(0)} />
        <Tab className={classes.tab} label="Resources" {...a11yProps(1)} />
        <Tab className={classes.tab} label="Profile" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0} style={{width:"100%"}}>
        Chat
      </TabPanel>
      <TabPanel value={value} index={1} style={{width:"100%"}}>
        <Resource data={data} />
      </TabPanel>
      <TabPanel value={value} index={2} style={{width:"100%"}}>
        <Profile/>
      </TabPanel>
    </Box>
      </Container>
      </Box>
    </>
  );
};

export default Dashboard;