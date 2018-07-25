import React from 'react'
import image from '../images/backgrounds/bonefire.jpg'
import { RABBIT } from '../items';

export { image }

export const content =  
  <p>
    Vous avez allumé votre feu pour la nuit. 

  </p>

export const choices = [
  { page: 'BonefireAsleep', message: "Essayer de vous endormir rapidement" },
  { page: 'BonefireAwake', message: "Rester éveillé pret du feu de camps "},
  { page: 'BonefireAwakeCook', message: "Cuisiner le lapin a la broche", requires: { items: [ RABBIT ] } },
  
]
