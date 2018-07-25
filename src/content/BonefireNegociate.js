import React from 'react'
import image from '../images/backgrounds/bonefireAsleep.jpg'
import { RONDACHE } from '../items';

export { image }

export const consequences = {
  life: -10,
  dropItems: [ RONDACHE ]
  
}

export const content =  
  <p>
    Vous engagez les negociation avec les rodeurs en leur proposant de leur ceder votre bouclier sans opposer de resistance.
  </p>

export const choices = [
  { page: 'Bonefire', message: "Retournez pres de votre feu de camps" },
]
