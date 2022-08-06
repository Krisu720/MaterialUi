import React from 'react'
import { Box, TextField, MenuItem} from '@mui/material'
import { useState } from 'react'

export const MuiSelect = () => {

    const [countries, setCountries] = useState([])
    console.log({countries})
    const handleChange = (e) => {
        const value = e.target.value
        setCountries(value)
    }
  return (
    <Box width='250px'>
        <TextField 
        fullWidth 
        label='Select Countries' 
        value={countries} 
        onChange={handleChange} 
        SelectProps={{
            multiple: true
        }}
        size='small'
        color='secondary'
         helperText='please selsect ur country'
        
        select>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>Us</MenuItem>
            <MenuItem value='PL'>Poland</MenuItem>
        </TextField>
    </Box>
  )
}

export default MuiSelect
