import React from 'react'
import {Box, FormControlLabel, Checkbox, formControl, FormLabel, FormGroup, FormControl} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'


const MuiCheckbox = () => {

    const [value,setValue] = React.useState(false)
    const [skills, setSkills] = React.useState([])

    console.log(skills)
   
    const handleSkillChange = (e) => {
        const index = skills.indexOf(e.target.value)
        if(index === -1) {
            setSkills([...skills, e.target.value])
            
        } else {
             setSkills(skills.filter((skill)=> skill != e.target.value) )
        }
    }

    const handleChange = () => {
        setValue(prevValue => !prevValue)
    }

  return (
    <Box>
        <Box>
            <FormControlLabel 
            label='I accept terms and conditions' 
            control={<Checkbox checked={value}/>}
            onChange={handleChange}
            >
            </FormControlLabel>
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} checked={value} onChange={handleChange}/>
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel 
                        label='HTML' 
                        value='HTML'
                        control={<Checkbox checked={skills.includes('HTML')} onChange={handleSkillChange}/>}
                    />
                    <FormControlLabel 
                        label='CSS' 
                        value='CSS'
                        control={<Checkbox checked={skills.includes('CSS')} onChange={handleSkillChange}/>}
                    />
                    <FormControlLabel 
                        label='JS' 
                        value='JS'
                        control={<Checkbox checked={skills.includes('JS')} onChange={handleSkillChange}/>}
                    />
                    
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckbox