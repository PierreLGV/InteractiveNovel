import React from 'react'
import image from '../images/backgrounds/forestleftroad.jpeg'
export { image }

export const consequences = {
  setLife: 1,
  setMana: 1,
  setInventory: [ ]
}

export const content =  
  <p>
      Vous venez de subir une cuisante defaite, laissé pour mort et depouillé de votre inventaire, vous empreintez a nouveau le chemin de gauche qui sillonne a travers bois.

  </p>

export const choices = [
  { page: 'ForestStairs', message: "Observer les environs" },
  { page: 'ForestMonster', message: "Quitter le sentier et couper à travers bois"},
  { page: 'GhostForest', message: "Avancer avec précaution sans faire de bruit"},
]