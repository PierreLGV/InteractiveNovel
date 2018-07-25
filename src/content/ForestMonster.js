import React from 'react'
import image from '../images/backgrounds/forestmonster.jpeg'
import { LAZARUS_SPIRE } from '../items';

export { image }

export const consequences = {
  life: -25
}

export const content =  
  <p>
    En vous enfoncant davantage dans les bois, vous vous heurtez a une creature demesurée qui vous balaie involontairenment d'un mouvement de queue.

  </p>

export const choices = [
  { page: 'LazarusSpell', message: "Combttre", requires: { mana: 50, items: [ LAZARUS_SPIRE ]} },
  { page: 'BonefireRunAway', message: "Fuir hors de porter de la bête"},
]