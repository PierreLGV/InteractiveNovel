import React from 'react'
import './Item.css'
import './Poping.css'
import items from '../items'

const Item = ({ item }) => 
    <div>
        <img src={item.imageUrl} alt='item' className='item poping'/>
    </div>

const Inventory = ({ inventory }) =>  
    <div className="item_grid">
        { inventory.map((itemIndex, i) => <Item key={i} item={items[itemIndex]} />) }
    </div>
    
export default Inventory