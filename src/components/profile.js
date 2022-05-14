import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box, ListItem , Grid , List , ListItemText , Typography, CardActions, CardMedia, Card, NextLink, Chip   } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Profile() {

    const [dense, setDense] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>

            <Grid item xs={12}>
                <Box>
                  <Typography>CO2 Produced:<span>100kg</span></Typography>
                </Box>
            </Grid>

            <Grid container>
                <Grid item xs={6}>
                    <Item>
                        <Box>
                            <Typography><span>24 inches</span> of acrtic ice lost</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Box>
                            <Typography><span>13 kg</span> below the global everage</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Box>
                            <Typography><span>2 meters</span> of habitat loss</Typography>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={4}>
            <Typography>Account Details</Typography>
            <List dense={dense}>
                <ListItem>
                  <ListItemText>Name:</ListItemText>
                  <ListItemText>Jenny</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Sustainability Knowledge:</ListItemText>
                  <ListItemText>Industry</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Goals:</ListItemText>
                  <ListItemText>Learn hoe to live more sustainability at home</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Footprint rank:</ListItemText>
                  <ListItemText>Accelerating Climate Change</ListItemText>
                </ListItem>
            </List>
        </Grid>
        <Grid item xs={12}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
