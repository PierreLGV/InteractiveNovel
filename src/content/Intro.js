import React from 'react'
import image from '../images/backgrounds/clairiere.jpg'

export { image }

export const content =  
  <p>
    Apres une longue journée de marche, vous vous retrouvez a la croisée des chemins. plusieurs choix s'offrent à vous.
  </p>

export const choices = [
  { page: 'ForestLeftRoad', message: "Prendre le chemin sur votre gauche" },
  { page: 'DiveIntoTheLake', message: "Inspecter le lac a proximité"},
  { page: 'Bonefire', message: "Allumez un feu de camp et reposez vous pour la nuit"},
  { page: 'GatherFood', message: "Partez chasser du gîbier, les bois en regorgent "},
]
