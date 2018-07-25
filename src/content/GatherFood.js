import React from 'react'
import image from '../images/backgrounds/deepforest.jpg'

export { image }

export const content =  
  <p>
    Vous partez en quete de gibier pour votre repas du soir.

  </p>

export const choices = [
  { page: 'HuntingTrap', message: "Poser un piege" },
  { page: 'ForestLichen', message: "Chercher des traces d'animaux"},
  { page: 'Bandit', message: "S'enfoncer d'avantage dans les bois"},
  { page: 'Intro', message: "Retourner à la croisée des chemins"},
  
]
