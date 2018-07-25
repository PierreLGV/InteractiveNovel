import React from 'react'
import image from '../images/backgrounds/lakestatue.jpg'

export { image }

export const consequences = {
  mana: -40,
  life: -10
}
export const content =  
  <p>
    Vous sentez vos force vous abandonner. Votre energie magique s'evapore vous laissant lâs et épuisé.

  </p>

export const choices = [
  { page: 'DiveIntoTheLake', message: "Regagner le rivage"},
]
