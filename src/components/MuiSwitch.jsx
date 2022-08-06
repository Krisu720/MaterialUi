import React from 'react'
import {FormControlLabel, Switch} from '@mui/material'


const MuiSwitch = () => {

    const [check, setCheck] = React.useState('') 

    console.log({check})

    const handleChange = (e) => {
        setCheck(prev=>!prev)
    }
  return (
    <div>
        <FormControlLabel
        control={<Switch size='large' color='error'/>}
        checked={check}
        onChange={handleChange}
        label='dark mode'
        />
    </div>
  )
}

export default MuiSwitch