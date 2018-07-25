import React from 'react'
import image from '../images/backgrounds/solarKnight3.png'
import { CHAPKA } from '../items';

export { image }

export const content =  
  <p>
    TRADE

  </p>

export const choices = [
  { page: 'TradeChapkaForSunHelm', message: "Echanger votre chapka contre le haume du chevalier", requires: { items: [ CHAPKA ] } },
  { page: 'ForestLeftRoad', message: "Echanger quelques mots puis rebrousser chemin"},
]
