import React from 'react'
import image from '../images/backgrounds/bonefireAsleep.jpg'
import { RONDACHE } from '../items';

export { image }

export const consequences = {
  life: -10,
  dropItems: [ RONDACHE ]
  
}

export const content =  
  <p>
    A Bandit strike you with an arrow in the knee.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aenean sed justo sapien. Aenean et metus auctor, euismod quam nec, lobortis metus. 
    Vivamus fermentum libero quis augue ultricies feugiat. Pellentesque sed euismod tellus. 
    Nullam et dui a lorem efficitur auctor eget vel quam. Fusce nec interdum mi, a lobortis neque. 
    Morbi vitae enim fringilla, lacinia nibh id, bibendum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.

  </p>

export const choices = [
  { page: 'Bonefire', message: "Retournez pres de votre feu de camps" },
]