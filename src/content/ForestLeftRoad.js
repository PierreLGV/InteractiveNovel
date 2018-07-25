import React from 'react'
import image from '../images/backgrounds/forestleftroad.jpeg'

export { image }

export const content =  
  <p>
    Vous empreintez le chemin de gauche qui sillonne a travers bois.

  </p>

export const choices = [
  { page: 'ForestStairs', message: "Observer les environs" },
  { page: 'ForestMonster', message: "Quitter le sentier et couper à travers bois"},
  { page: 'GhostForest', message: "Avancer avec précaution sans faire de bruit"},
]