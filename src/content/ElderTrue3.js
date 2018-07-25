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
      - Tu es vraiment trop mauvais en programmation jeune magicien... Aaarghhhhh...

      Fatiguée par vos réponses minable, le vieux sage meurt d'exaspération.
      Vous en profitez pour lui dérober son baton magique.
      Cette gymnastique mentale vous a revigorer !
  </p>

export const choices = [
  { page: 'ForestLeftRoad', message: "Retourner sur vos pas"},
]
