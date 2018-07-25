import React from 'react'
import image from '../images/backgrounds/hollandechapka.png'
import { RABBIT, SUN_SHIRT } from '../items';

export { image }

export const consequences = {
  pickUpItems: [ SUN_SHIRT ],
  dropItems: [ RABBIT ]
}
export const content =  
  <p>
    Le fin diplomate engage d'âpres negociations et parviens a conclure un accord avec l'homme en arme. 
    Vous optenez son armure de corps contre un lapin franchement chassé.

  </p>

export const choices = [
  { page: 'ForestLeftRoad', message: "Retournez sur vos pas" },
 
]
