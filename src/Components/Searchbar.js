import { useState } from 'react';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import './Searchbar.css';

function Searchbar({ handleSearch }){
    const [theSearchTerm, setTheSearchTerm] = useState('');
    function onInputChange(event){
        setTheSearchTerm(event.target.value);

    }
    function onFormSubmit(event){
        event.preventDefault();
        handleSearch(theSearchTerm);
        setTheSearchTerm('');
    }
    return(
        <div>
            <form className='searchArea' onSubmit={onFormSubmit}>
                {/* <input onChange={onInputChange} value={theSearchTerm}/> */}
                <TextField id="filled-basic" label="Enter a City" variant="filled" onChange={onInputChange} value={theSearchTerm} />
                <IconButton type='submit' color="primary" aria-label="Add a new city">
                     <AddCircleIcon />
                </IconButton>
            </form>
        </div>
    )
}

export default Searchbar;