import { useState, useEffect, useCallback } from 'react';
import { Box, Container, Grid , Tab, Tabs, Typography, CardActions, CardMedia, Card, NextLink, Chip   } from '@mui/material';

export default function Resources() {

  const image = 'https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80'


  return (
    <Box
        sx={{
          // backgroundColor: 'background.default',
          backgroundColor: '#fffff'
        }}
      >
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
                <Chip label={`Non-Academic`} size="small" variant="filled" style={{color:'#7B1FA2', backgroundColor:'rgb(231 151 245)'}}/>
              </CardActions>
            </Card>
          </Grid>
        </Box>
    </Box>
  );
}