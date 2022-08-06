import React from 'react'
import { Stack, TextField, InputAdornment, IconButton} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const MuiTextField = () => {
    const [Icon, setIcon] = React.useState(true)
    const handleClick = () => {
        setIcon(prevSetIcon => !prevSetIcon)
    } 

  return (
    <Stack spacing={4}>
         <Stack direction='row'>
            <TextField label='amount' type={Icon ? 'password' : 'text'} InputProps={{
                endAdornment: <InputAdornment position='end'><IconButton onClick={handleClick}>{Icon ? <VisibilityIcon/> : <VisibilityOffIcon/>}</IconButton></InputAdornment>
            }}/>
           
        </Stack>
        <Stack direction='row'>
            <TextField label='name' variant='outlined'/>
            <TextField label='name' variant='filled'/>
            <TextField label='name' variant='standard'/>
        </Stack>
        <Stack direction='row'>
            <TextField label='small secondary' color='secondary' size='small'/>
        </Stack>
        <Stack direction='row'>
            <TextField label='Form Input' required error/>
            <TextField label='password' type='password' helperText='nie pokazuj hasło'/>
            <TextField label='read only' InputProps={{readOnly: true}}/>
            
        </Stack>
        <Stack direction='row'>
            <TextField label='amount' InputProps={{
                startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}/>
            <TextField label='Weight' InputProps={{
                endAdornment: <InputAdornment position='end'>kg</InputAdornment>
            }}/>
        </Stack>
       
    </Stack>
  )
}

export default MuiTextField
