import React from 'react'
import image from '../images/backgrounds/SolarFlare.jpg'
import { CHAPKA } from '../items';

export { image }

export const consequences = {
  life: -10,
  dropItems: [ CHAPKA ]
}

export const content =  
  <p>
    esc au dernier moent mais franfran est mort.

  </p>

export const choices = [
  { page: 'ForestLeftRoad', message: "Repartir sur vos pas"},
  
]
