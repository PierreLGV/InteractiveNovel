import React from 'react'
import image from '../images/backgrounds/elder.jpg'

export { image }

export const content =  
  <p>
    Un vieillard vous accueil et tiens des propos étranges.
    - Quel est le language des Dieux ?

  </p>

export const choices = [
  { page: 'ElderFalse', message: "L'Elfique"},
  { page: 'ElderFalse', message: "L'Araméen"},
  { page: 'ElderFalse', message: "Le verlan"},  
  { page: 'ElderTrue1', message: "Le PHP" },  
  
]
