import React from 'react'
import { Autocomplete,TextField } from '@mui/material'
import { useState } from 'react'


const Skill = {
    id: null,
    label: null
}

const skills= ['html','css','js','react']

const skillOptions = skills.map((skill,index) => ({
    id: index +1,
    label: skill
}))

const MuiAutocomplete = () => {

    const [value, setValue] = useState(null)
    console.log({skill})
    const [skill,setSkill] = useState(null)
  return (
    <div>
        <Autocomplete 
        options={skills} 
        renderInput={(params) => <TextField {...params} 
        label='skills' />}
        value={value}
        onChange={(e,nvalue) => setValue(nvalue)}
        freeSolo
        />
        <Autocomplete 
        options={skillOptions} 
        renderInput={(params) => <TextField {...params} 
        label='skills' />}
        value={skillOptions}
        onChange={(e,nvalue) => setSkill(nvalue)}
        freeSolo
        />
    </div>
  )
}

export default MuiAutocomplete