import React from 'react'
import image from '../images/backgrounds/elder.jpg'

export { image }

export const content =  
  <p>
    Comment remplir l'Array de Bool sans String ?
  </p>

export const choices = [
  { page: 'ElderTrue3', message: "Mais t'es un gros dégueulasse toi ?!" },
  { page: 'ElderFalse', message: "Je spread les Bool dans l'Array... obvious" },
  { page: 'ElderFalse', message: ".map ...? filter ? ... var ?"},
  { page: 'ElderFalse', message: "Array.push()"},
]
