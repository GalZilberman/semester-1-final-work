import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MainContext } from '../MainContext';

export default function RemoveItemCard(props) {

    const { Tshirts, sweatpants, hats, deleteItem } = React.useContext(MainContext);


    let TshirtList = Tshirts.map(item => <RemoveItemCard key={item.id} id={item.id} imageSrc={item.imageSrc} name={item.name} price={item.price} />)
    let hatsList = hats.map(item => <RemoveItemCard key={item.id} id={item.id} imageSrc={item.imageSrc} name={item.name} price={item.price} />)
    let sweatpantsList = sweatpants.map(item => <RemoveItemCard key={item.id} id={item.id} imageSrc={item.imageSrc} name={item.name} price={item.price} />)


    return (
        <Card sx={{ width: "200px", padding: "5px", margin: "10px" }}>
            <CardMedia
                sx={{ height: 140 }}
                image={props.imageSrc}
                title="hats"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: {props.price} NIS
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => deleteItem(props.id, props.name)}>Remove item</Button>

            </CardActions>
        </Card>
    )
}
