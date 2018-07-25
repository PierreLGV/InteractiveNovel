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
    You take the left road.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aenean sed justo sapien. Aenean et metus auctor, euismod quam nec, lobortis metus. 
    Vivamus fermentum libero quis augue ultricies feugiat. Pellentesque sed euismod tellus. 
    Nullam et dui a lorem efficitur auctor eget vel quam. Fusce nec interdum mi, a lobortis neque. 
    Morbi vitae enim fringilla, lacinia nibh id, bibendum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.

  </p>

export const choices = [
  { page: 'ForestStairs', message: "Observez les environs" },
  { page: 'ForestMonster', message: "Quittez le sentier et couper à travers bois"},
  { page: 'GhostForest', message: "Avancez avec précaution sans faire de bruit"},
]