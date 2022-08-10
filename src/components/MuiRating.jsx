import React from 'react'
import { Stack, Rating } from '@mui/material'
import { useState } from 'react'
import FavouriteIcon from '@mui/icons-material/Favorite'
import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder'
const MuiRating = () => {
    const [value, setValue] = useState(null)
    console.log(value)
    const handleChange = (e,nvalue) => {
        setValue(nvalue)
    }
  return (
    <Stack spacing={2}>
        <Rating 
        value={value} 
        onChange={handleChange} 
        precision={0.5} 
        size='large' 
        icon={<FavouriteIcon color='error'/>} 
        emptyIcon={<FavouriteBorderIcon/>}
        // readOnly
        // highlightSelectedOnly
        />
    </Stack>
  )
}

export default MuiRating