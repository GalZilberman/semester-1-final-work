import { MainContext } from '../MainContext';
import Hats from './Hats';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function HatsList() {

    const { hats } = React.useContext(MainContext)

    let list = hats.map(item => <Hats key={item.id} id={item.id} imageSrc={item.imageSrc} name={item.name} price={item.price} amount={item.amount} />)

    const [listOfHats, setListOfHats] = React.useState(list);

    // אירוע להצגת המוצרים מהגדול לקטן
    const showH2l = () => {
        const high2LowList = hats.sort((a, b) => a.price - b.price);
        list = high2LowList.map(item => <Hats key={item.id} id={item.id} imageSrc={item.imageSrc} name={item.name} price={item.price} amount={item.amount} />)
        setListOfHats(list);
    };


    // אירוע להגת המוצרים מהקטן לגדול
    const showL2H = () => {
        const low2HighList = hats.sort((a, b) => b.price - a.price);
        list = low2HighList.map(item => <Hats key={item.id} id={item.id} imageSrc={item.imageSrc} name={item.name} price={item.price} amount={item.amount} />)
        setListOfHats(list);
    };

    return (
        <div>
            <h3>Hats</h3>

            <FormControl>
                
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="1" control={<Radio />} label="Sort by price low to high" onChange={showH2l}/>
                    <FormControlLabel value="2" control={<Radio />} label="Sort by price high to low" onChange={showL2H}/>

                </RadioGroup>
            </FormControl>


            <div className='list'>
                {list}
            </div>

        </div>
    )
}
