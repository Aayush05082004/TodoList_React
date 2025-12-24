import ListItem from '@mui/material/ListItem';
import { useState } from 'react';
export default function TodoForm(){
const [text,setText]=useState("");

const handleChange=((evt)=>{
    setText(evt.target.value);
})
    return(
        <ListItem>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} value={text} />
        </ListItem>
    )
}