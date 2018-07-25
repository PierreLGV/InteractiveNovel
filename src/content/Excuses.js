import React from 'react'
import image from '../images/backgrounds/solarKnight3.png'
import { CHAPKA } from '../items'

export { image }

const consequences = {
  dropItems: [ CHAPKA ]
}

export const content =  
  <p>
    Vous proposez d'offrir votre chapka en offrande au chevalier afin de calmer sa fureur.
  </p>

export const choices = [
  { page: 'TradeChapkaFree', message: "Offrir respectueusement la chapka au chevalier" },
  { page: 'SolarFlare', message: "Tenter de prendre la fuite" },
  { page: 'SolarFlare', message: "Engager le combat" },
]
