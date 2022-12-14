import React from "react";
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";
const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
        component='img'
        height='140'
        image='https://source.unsplash.com/random'
        alt='unsplash imagfe'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            laudantium vitae odio unde debitis reprehenderit. 
          </Typography>
        </CardContent>
        <CardActions>
            <Button size='small' variant='outlined'>Share</Button>
            <Button size='small' variant='outlined'>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
