import React, { useState } from 'react'
import {Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from '@mui/material/'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

 const MuiButton = () => {
  const [formats, setFormats] = React.useState(null)

  console.log(formats)
  const handleFormatChange = (e,updatedFormats) => {
    setFormats(updatedFormats)
  }
  

  return (
    <Stack>
      <Stack spacing={2} direction='row'>
          <Button variant='text' href='https://mui.com/material-ui/getting-started/installation/'>Text</Button>
          <Button variant='contained'>Contained</Button>
          <Button variant='outlined'>Ouutlined</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
          <Button variant='contained' color='primary'>primary</Button>
          <Button variant='contained' color='secondary'>secondary</Button>
          <Button variant='contained' color='error'>error</Button>
          <Button variant='contained' color='warning'>warning</Button>
          <Button variant='contained' color='info'>info</Button>
          <Button variant='contained' color='success'>success</Button>
          
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
          <Button variant='contained' size='small'>small</Button>
          <Button variant='contained' size='medium'>medium</Button>
          <Button variant='contained' size='large'>large</Button>
          
      </Stack>
      <Stack spacing={2} direction='row'>
          <Button variant='contained' startIcon={<SendIcon/>} onClick={() => alert("XD")}>small</Button>
          <Button variant='contained' endIcon={<SendIcon/>} disableElevation>small</Button>
          <IconButton color='success' size='medium'>
              <SendIcon/>
          </IconButton>
      </Stack>
      <Stack direction='row'>
        <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary' aria-aria-label='alignment button group'>

          <Button onClick={() => alert("left")}>Left</Button>
          <Button onClick={() => alert("center")}>Center</Button>
          <Button onClick={() => alert("right")}>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction='row'>
          <ToggleButtonGroup exclusive orientation='vertical' color='info' aria-label='text formatting' value={formats} onChange={handleFormatChange}>
            <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
            <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
            <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
          </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}
export default MuiButton