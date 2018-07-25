import React from 'react'
import image from '../images/backgrounds/bonefire.jpg'
import { RABBIT } from '../items';

export { image }

export const content =  
  <p>
    A BoneFire has been lit.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aenean sed justo sapien. Aenean et metus auctor, euismod quam nec, lobortis metus. 
    Vivamus fermentum libero quis augue ultricies feugiat. Pellentesque sed euismod tellus. 
    Nullam et dui a lorem efficitur auctor eget vel quam. Fusce nec interdum mi, a lobortis neque. 
    Morbi vitae enim fringilla, lacinia nibh id, bibendum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.

  </p>

export const choices = [
  { page: 'BonefireAsleep', message: "Try to find sleep" },
  { page: 'BonefireAwake', message: "Stay a while near the bonefire"},
  { page: 'BonefireAwakeCook', message: "Cuisinez le lapin a la broche", requires: { items: [ RABBIT ] } },
  
]
