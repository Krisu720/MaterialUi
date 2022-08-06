import React from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material'

const MuiRadioButton = () => {

    const [value, setValue] =React.useState('')
    console.log({value})
    const handleChange = (e) => {
        setValue(e.target.value)
    }

  return (
    <Box>
        <FormControl>
            <FormLabel color='secondary' >
                Years of experience
            </FormLabel>
            <RadioGroup name='job-experience-group' onChange={handleChange} row>
                <FormControlLabel control={<Radio size='small' color='secondary'/>} label='0-2' value='0-2' />
                <FormControlLabel control={<Radio/>} label='3-5' value='3-5' />
                <FormControlLabel control={<Radio/>} label='6-10' value='6-10' />
            </RadioGroup>
        </FormControl>
    </Box>
  )
}

export default MuiRadioButton