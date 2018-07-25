import React from 'react'
import image from '../images/backgrounds/lake.jpg'

export { image }

export const content =  
  <p>
    De petites embarcations disparaissent au loin. L'eau est calme et l'idée de vous y baigner vous plaint bien.

  </p>

export const choices = [
  { page: 'LakeStatue', message: "Nagez un moment pour vous delacer les muscles." },
  { page: 'MuddyWater', message: "Cherchez du poisson"},
  { page: 'LakeBottom', message: "Inspecter le fond du lac"},
  { page: 'Intro', message: "Retournez sur la croisée des chemins"},
]
