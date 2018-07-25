import React from 'react'
import image from '../images/backgrounds/hollandechapka.png'
import { RABBIT, CHAPKA } from '../items';

export { image }

export const consequences = {
  dropItems: [ CHAPKA ],
  mana: -30,
}

export const content =  
  <p>
    Vous contactez magiquement un diplomate haut placé pouvant vous sortir de cette situation perilleuse.

  </p>

export const choices = [
  { page: 'Flambuisiness', message: "Faire affaire" , requires: { items: [ RABBIT ]}},
  { page: 'SolarFlareEsc', message: "Utiliser la force" },
  
]
