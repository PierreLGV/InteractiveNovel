import React from 'react'
import './Mana.css'
import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.css'
import ManaSphere from '../images/ManaSphere.gif'

const Mana = (props) => 
  <div className=" mana_sphere">
    <img src={ManaSphere} alt='mana sphere'/>
  </div>
    
export default Mana