import React from 'react'
import image from '../images/backgrounds/elder.jpg'
import { LAZARUS_SPIRE } from '../items';

export { image }

export const consequences = {
  pickUpItems: [ LAZARUS_SPIRE ],
  setMana: 100
}
export const content =  
  <p>
        Un vieillard vous accueil et tiens des propos étranges.


  </p>

export const choices = [
  { page: 'ForestLeftRoad', message: "Retourner sur vos pas"},
]
