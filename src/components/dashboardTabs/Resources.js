import React, { useState } from "react";
// import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@mui/material'
import Carousel from "react-elastic-carousel";
import Item from "./Item";

// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//     { width: 768, itemsToShow: 3 },
//     { width: 1200, itemsToShow: 4 }
//   ];

const Resources = () => {

    // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

return (

    <div>
        <Typography>ABC</Typography>
        {/* <Carousel breakPoints={breakPoints}>
        {items.map((item) => (
            <Item key={item}>{item}</Item>
        ))}
        </Carousel> */}
    </div>

);
};

export default Resources;

