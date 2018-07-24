import React from 'react'
import manaSphereImageContent from '../images/mana-sphere.gif'
import manaSphereImageMask from '../images/mana-sphere.png'
import './ManaSphere.css'

const ManaSphere = ({ mana }) =>
  <div className="mana-sphere-container">
    <div className="mana-sphere-content-container">
      <div className="mana-sphere-content" style={{ height: `${mana}%`, backgroundImage:`url(${manaSphereImageContent})` }}></div>
    </div>
    <div className="mana-sphere-mask" style={{ backgroundImage:`url(${manaSphereImageMask})` }}></div>
  </div>

export default ManaSphere
