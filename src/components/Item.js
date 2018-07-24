import React from 'react'
import './Item.css'
import './Poping.css'
import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.css'
// import leatherboots from '../images/leatherboots.gif'
// import harlequincrest from '../images/harlequincrest.gif'
// import lazarusspire from '../images/lazarusspire.gif'
// import sash from '../images/sash.gif'
// import rondache from '../images/rondache.gif'
// import quilted from '../images/quilted.gif'

const Item = ({ item }) => 
    <div>
        <img src={item.img} alt='item' className='item poping'/>
    </div>

const Inventory = ({ inventory }) =>  
    <div className="item_grid">
        { inventory.map((item, i) => <Item key={i} item={item} />) }
    </div>
    
export default Inventory