import React, { useContext } from 'react'
import { MainContext } from '../MainContext';
import RemoveItemCard from './RemoveItemCard';

export default function RemoveItem() {


  const { Tshirts, sweatpants, hats } = useContext(MainContext);


  let TshirtList = Tshirts.map(item => <RemoveItemCard key={item.id} id={item.id} imageSrc={item.imageSrc} name={item.name} price={item.price} />)
  let hatsList = hats.map(item => <RemoveItemCard key={item.id} id={item.id} imageSrc={item.imageSrc} name={item.name} price={item.price} />)
  let sweatpantsList = sweatpants.map(item => <RemoveItemCard key={item.id} id={item.id} imageSrc={item.imageSrc} name={item.name} price={item.price} />)

  return (
    <div>
      <h3>Remove items</h3>
      <div className='list'>
        {TshirtList}
        {hatsList}
        {sweatpantsList}
      </div>
    </div>
  )
}
