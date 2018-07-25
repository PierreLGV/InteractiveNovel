import React from 'react'
import image from '../images/backgrounds/SolarFlare.jpg'

export { image }

export const consequences = {
  life: -100,
}

export const content =  
  <p>
    Fou de rage, le Chevalier Solaire invoque le soleil et vous immole par le feu.
    Vous etes mort.

  </p>

export const choices = [
  { page: 'GameOver', message: "Vous mourrez dans d'atroces souffrances"},
  
]
