import React from 'react'
import image from '../images/backgrounds/bonefireAsleep.jpg'
import { RONDACHE } from '../items';

export { image }

export const consequences = {
  life: -20,
}

export const content =  
  <p>
    Des rodeurs attendaient que vous baissiez votre guarde pour vous detrouser.
    L'un deux vous reveil en vous portant un violent coup a la tete.

  </p>

export const choices = [
  { page: 'BonefireNegociate', message: "Negociez.", requires: { items: [ RONDACHE ] }},
  { page: 'BonefireAFight', message: "Combattre les assaillants", requires : { mana: 20 }},
  { page: 'BonefireRunAway', message: "Tentez de fuir vers les bois" },
]
