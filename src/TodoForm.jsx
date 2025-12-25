import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { Create } from '@mui/icons-material';
import { useState } from 'react';
import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export default function TodoForm({add}){
const [text,setText]=useState("");

const handleChange=((evt)=>{
    setText(evt.target.value);
})
const addChange=e=>{
    e.preventDefault();
    add(text);
    setText(" ");

}
    return(
        <ListItem>
            <form onSubmit={addChange}>
            <TextField 
            id="outlined-basic" 
            label="Add Todo" 
            variant="outlined" 
            onChange={handleChange} 
            value={text}
            InputProps={{
                endAdornment:<InputAdornment position="end">
                <IconButton
                  aria-label='display the password' edge="end" type='Submit'
                >
                <Create />
                </IconButton>
              </InputAdornment>
            }}
            />
            </form>
        </ListItem>
    )
}