import React from 'react'
import lifeSphereImageContent from '../images/life-sphere.gif'
import lifeSphereImageMask from '../images/life-sphere.png'
import './LifeSphere.css'

const LifeSphere = ({ life }) =>
  <div className="life-sphere-container">
    <div className="life-sphere-content-container">
      <div className="life-sphere-content" style={{ height: `${life}%`, backgroundImage:`url(${lifeSphereImageContent})` }}></div>
    </div>
    <div className="life-sphere-mask" style={{ backgroundImage:`url(${lifeSphereImageMask})` }}></div>
  </div>

export default LifeSphere
