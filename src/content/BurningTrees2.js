import React from 'react'
import image from '../images/backgrounds/burnedTrees2.jpg'
import { LAZARUS_SPIRE } from '../items';

export { image }

export const consequences = {
  life: -25
}

export const content =  
  <p>
    Felicitation, vous venez de terminer l'acte I.
  </p>

export const choices = [
  { page: 'Start', message: "New Game" },
  
]