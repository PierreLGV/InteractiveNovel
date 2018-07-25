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
    Un déferlement de lumiere purificatrice liquefie le diplomate sur place. Vous esquivez de justesse mais avez le poil roussi.

  </p>

export const choices = [
  { page: 'ForestLeftRoad', message: "Repartir sur vos pas"},
  
]
