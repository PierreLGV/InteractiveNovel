import React from 'react'
import './Life.css'
import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.css'
import LifeSphere from '../images/LifeSphere.gif'

const Life = (props) => 
  <div className="life_sphere">
    <img src={LifeSphere} alt='life sphere'/>
    <span> 
      {props.life}
    </span>
  </div>

export default Life