import React from 'react'
import image from '../images/backgrounds/psychomehdi.gif'
import { SUN_HELM } from '../items'

export const consequences = {
  pickUpItems: [ SUN_HELM ]
}

export { image }

export const content =
  <p>
    Vous venez voler le casque de l'homme en armure. Il vous repère et accourt d'un pas menacant. Vous decouvrez son vrai visage, il vous dévisage fixement en agitant son opinel.
  </p>

export const choices = [
  { page: 'ForestLeftRoad2', message: "Repartez la queue entre les jambes"},

]
