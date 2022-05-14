import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Container, Grid , Tab, Tabs, Typography, CardActions, CardMedia, Card, NextLink, Chip   } from '@mui/material';
import { gtm } from '../../lib/gtm';
import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {Resources} from '../../components/dashboardTabs/Resources'

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
    maxWidth: "140px"
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
  const image = 'https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80'

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
      >
      <Container 
      maxWidth={false}
      sx={{ p:2}}
      >
        <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width:190}}
      >
        <Tab className={classes.tab} label="Chat" {...a11yProps(0)} />
        <Tab className={classes.tab} label="Resources" {...a11yProps(1)} />
        <Tab className={classes.tab} label="Profile" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Chat
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <Resources/> */}
        <Box>
          <Grid container >
            <Card
             sx={{ minWidth: 280,
              cursor :"pointer",
              border: "1px solid rgba(0, 0, 0, 0.23)",
              
            }}>
                <CardMedia
                 component="img"
                 height="194"
                 image={image}
                 alt="Design image"
                 />
              <CardActions
                sx={{
                  px:2,
                  display: 'flex', 
                  justifyContent:'space-between'
                }}>
                  <Typography>Title</Typography>
                <Chip label={`Academic`} size="small" variant="filled" style={{color:'#E65100', backgroundColor:'rgb(241 203 172)'}}/>
                {/* <Chip label={`Non-Academic`} size="small" variant="filled" style={{color:'#7B1FA2', backgroundColor:'rgb(231 151 245)'}}/> */}
              </CardActions>
            </Card>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Profile
      </TabPanel>
    </Box>
      </Container>
      </Box>
    </>
  );
};

export default Dashboard;