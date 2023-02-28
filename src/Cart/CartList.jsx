import React, { useContext } from 'react'
import { MainContext } from '../MainContext'
import Cart from './Cart';
import Button from '@mui/material/Button';

export default function CartList() {

  const { totalPrice, cartTshirt, cartHats, cartSweatpants } = useContext(MainContext);

  let TshirtList = cartTshirt.map(item => <Cart key={item.id} id={item.id} imageSrc={item.imageSrc} name={item.name} price={item.price} amount={item.amount} />)
  let hatsList = cartHats.map(item => <Cart key={item.id} id={item.id} imageSrc={item.imageSrc} name={item.name} price={item.price} amount={item.amount} />)
  let sweatpantsList = cartSweatpants.map(item => <Cart key={item.id} id={item.id} imageSrc={item.imageSrc} name={item.name} price={item.price} amount={item.amount} />)



  return (
    <div>
      <div className='list'>
        {TshirtList}
        {hatsList}
        {sweatpantsList}
      </div>

      <div>
        <p>Total price: {totalPrice} NIS</p>
        <Button variant="contained" disableElevation>
          Buy
        </Button>
      </div>
    </div>
  )
}
