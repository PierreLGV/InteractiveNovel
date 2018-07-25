import React from 'react'
import image from '../images/backgrounds/sunknightmehdi.gif'
import { SUN_HELM } from '../items'

export const consequences = {
  pickUpItems: [ SUN_HELM ]
}

export { image }

export const content =  
  <p>
    Vous voler le casque de l homme en armure. Il vous repere et accourt d'un pas menacant. Vous decouvrez son vrai visage ...
  </p>

export const choices = [
  { page: 'ForestLeftRoad2', message: "Repartez la queue entre les jambes"},

]
