import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box, ListItem, Grid, List, ListItemText, Typography, TableContainer, Table, TableHead, 
    TableRow,TableCell, TableBody, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    textLable: {
        fontSize: '20px',
        color: "#919191"
    },
    mainDataText: {
        color: "#000",
        fontSize: 40,
        fontWeight: 600
    },
    textdata: {
        color:"#000",
        fontSize: '20px',

    },
    backgroundImg: {
        // padding:'20px',
        // minHeight:'580px',
        // backgroundPosition:'center center',
        // backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
        // backgroundSize: 'cover',
        // backgroundImage: "url(" + "https://images.unsplash.com/photo-1629948618343-0d33f97a3091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80"+")" 
    }
    
  });

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Profile() {

  const classes = useStyles();
  const [dense, setDense] = React.useState(false);

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1}} className={classes.backgroundImg}>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{pr:1}}>
            <Grid item xs={12}>
                <Box sx={{pb:'30px', textAlign:'center'}}>
                  <Typography className={classes.textLable}>CO2 Produced:<span className={classes.mainDataText}>100kg</span></Typography>
                </Box>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Item sx={{padding:'30px', boxShadow: '0 10px 5px #e1e1e1'}}>
                        <Box>
                            <Typography className={classes.textLable}><span className={classes.textdata}>24 inches</span> of acrtic ice lost</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item sx={{padding:'30px', boxShadow: '0 10px 5px #e1e1e1'}}>
                        <Box>
                            <Typography className={classes.textLable}><span className={classes.textdata}>13 kg</span> below the global everage</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item sx={{padding:'30px', boxShadow: '0 10px 5px #e1e1e1'}}>
                        <Box>
                            <Typography className={classes.textLable}><span className={classes.textdata}>2 meters</span> of habitat loss</Typography>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={4}  sx={{background: '#f3f3f3'}}>
            <Typography sx={{fontSize:'24px'}}>Account Details</Typography>
            <List dense={dense}>
                <ListItem>
                  <ListItemText sx={{color: "#919191"}}>Name: <span style={{color: "#000000"}}>Jenny</span></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText sx={{color: "#919191"}}>Sustainability Knowledge: <span style={{color: "#000000"}}>Industry</span></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText sx={{color: "#919191"}}>Goals: <span style={{color: "#000000"}}>Learn how to live more sustainability at home</span></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText sx={{color: "#919191"}}>Footprint rank: <span style={{color: "#000000"}}>Accelerating Climate Change</span></ListItemText>
                </ListItem>
            </List>
        </Grid>
        <Grid item xs={12} sx={{mt:2}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Item</TableCell>
                            <TableCell align="left">Type</TableCell>
                            <TableCell align="left">Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{textAlign: 'left'}}>Lightbulbs</TableCell>
                            <TableCell align="left">
                                <FormControl sx={{width:"70%"}}>
                                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={value}
                                    label="select"
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">5</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
