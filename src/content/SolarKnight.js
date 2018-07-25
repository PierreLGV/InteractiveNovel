import React from 'react'
import image from '../images/backgrounds/solarknight.jpg'
import { CHAPKA } from '../items';

export { image }

export const content =  
  <p>
    Vous agressé gatuitement l'homme a coup de cayoux. Il semble furieux.

  </p>

export const choices = [
  { page: 'Excuses', message: "S'excuser et argumenter", requires: { items: [CHAPKA] } },
  { page: 'SolarFlare', message: "Engager le combat"},
  { page: 'RunAway', message: "Tenter de prendre la fuite"},
  { page: 'Flamby', message: "Passer un appel à un ami", requires: { mana: 30 , items: [ CHAPKA ] }},
]
