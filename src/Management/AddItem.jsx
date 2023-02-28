import { MainContext } from '../MainContext';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';


export default function AddItem() {

    const { addNewItem2List } = React.useContext(MainContext);

    let type = "";
    let imageSrc = "";
    let price = "";


    // אירוע לחיצת כפתור הוסף מוצר
    const addNewItem = () => {
        if (type === "" || imageSrc === "" || price === "") {
            alert("All sections must be filled in")
        }
        else {
            addNewItem2List(type, imageSrc, price);
        }
    };



    return (
        <div>

            <h3>Add item</h3>


            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="T-shirt" control={<Radio />} label="T-shirt" onChange={(e) => type = e.target.value} />
                    <FormControlLabel value="Hat" control={<Radio />} label="Hat" onChange={(e) => type = e.target.value} />
                    <FormControlLabel value="Sweatpants" control={<Radio />} label="Sweatpants" onChange={(e) => type = e.target.value} />

                </RadioGroup>
            </FormControl>

            <div>
                <label htmlFor="imageSrc">Image url: </label>
                <input type="text" id='imageSrc' onChange={(e) => imageSrc = e.target.value} /> <br />
                <label htmlFor="price">Item price: </label>
                <input type="number" id='price' onChange={(e) => price = e.target.value} /> <br />
                <Button onClick={addNewItem} variant="contained" disableElevation>
                    Add item
                </Button>
            </div>


        </div>
    )
}
