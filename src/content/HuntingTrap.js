import React from 'react'
import image from '../images/backgrounds/huntingTrap.jpg'
import { RABBIT } from '../items';

export { image }

export const consequences = {
  pickUpItems: [ RABBIT ],
}
export const content =  
  <p>
    Vous posez quelques pieges a lapins en esperant attraper votre repas du soir.
  </p>

export const choices = [
  { page: 'Intro', message: "Retourner a la croisée des chemins" },
  { page: 'Bandit', message: "Explorer la foret plus profondement"},
 
]
