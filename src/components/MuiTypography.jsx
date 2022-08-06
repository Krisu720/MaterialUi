import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>Hello world</Typography>
        <Typography variant='h2'>Hello world</Typography>
        <Typography variant='h3'>Hello world</Typography>
        <Typography variant='h4' component='h1' gutterBottom>Hello world</Typography>
        <Typography variant='h5'>Hello world</Typography>
        <Typography variant='subtitle1'>Hello world</Typography>
        <Typography variant='subtitle2'>Hello world</Typography>
        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium beatae expedita magni asperiores ex culpa quos nostrum corrupti, omnis pariatur vitae quo voluptatem consequuntur veritatis, natus ea. Minus, veritatis.</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto neque veniam magnam incidunt, explicabo vero, aut distinctio quaerat ullam dolore nostrum impedit praesentium expedita pariatur necessitatibus perferendis beatae dolor voluptates!</Typography>
    </div>
  )
}

export default MuiTypography