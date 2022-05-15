import { Box, Button, Grid, Link, MenuItem, Select,  CardActions, CardMedia, Card, Chip  ,TextField, Typography, CardActionArea } from '@mui/material';

export default function Resource({data}){


  return (
    <Box>
      <Grid key: {article} container >
        {data.map(article => {
        return (                
            <Card
                sx={{ minWidth: 280,
                cursor :"pointer",
                border: "none",
                boxShadow : "none",            
            }}>
            <CardActionArea href={article.link} target="_blank">
                <CardMedia
                    component="img"
                    height="194"
                    image={article.image}
                    alt="Design image"
                    sx={{
                    borderRadius : "8px",
                }}/>
                <CardActions
                    sx={{
                    px:2,
                    display: 'flex', 
                    justifyContent:'space-between'
                    }}>
                    <Typography sx={{color: '#616161'}}>{article.title}</Typography>
                    {article.type === 'academic' ? 
                        <Chip label={`Academic`} size="small" variant="filled" style={{color: '#E65100', backgroundColor:  'rgb(241 203 172)'}}/> :
                        <Chip label={`Non-Academic`} size="small" variant="filled" style={{color:'#7b1fa2', backgroundColor:'rgba(216,184,226,255)'}}/>}
                </CardActions>
                </CardActionArea>
            </Card> )})}
      </Grid>
    </Box>
  );
};
