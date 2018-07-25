import React from 'react'
import image from '../images/backgrounds/sunknightmehdi.gif'
import { CHAPKA, SUN_HELM } from '../items'

export const consequences = {
  pickUpItems: [ SUN_HELM ],
  dropItems: [ CHAPKA ]
}

export { image }

export const content =  
  <p>
    Le chevalier considère attentivement la chapka avant d'ôter son haume, révélant ainsi son visage au teint halé.
    Le chapeau lui va comme un gant et votre offrande permet de calmer le l'homme en armure.
    Il vous tourne le dos puis disparait à grand pas.
  </p>

export const choices = [
  { page: 'ForestLeftRoad', message: "Retourner sur vos pas",},
]
