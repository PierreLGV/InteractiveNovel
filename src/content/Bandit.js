import React from 'react'
import image from '../images/backgrounds/bandit.png'

export { image }

export const content =  
  <p>
    Vous surprenez des bandits prets a pendre un homme. Deciderez vous d'intervenir ?

  </p>

export const choices = [
  { page: 'BanditFight', message: "Engager le combat",},
  { page: 'GatherFood', message: "Prendre discretement la fuite"},
]
