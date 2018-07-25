import React from 'react'
import image from '../images/backgrounds/huntingTrap.jpg'
import { RABBIT } from '../items';

export { image }

export const consequences = {
  pickUpItems: [ RABBIT ],
}
export const content =  
  <p>
    You Set a Trap.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aenean sed justo sapien. Aenean et metus auctor, euismod quam nec, lobortis metus. 
    Vivamus fermentum libero quis augue ultricies feugiat. Pellentesque sed euismod tellus. 
    Nullam et dui a lorem efficitur auctor eget vel quam. Fusce nec interdum mi, a lobortis neque. 
    Morbi vitae enim fringilla, lacinia nibh id, bibendum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.

  </p>

export const choices = [
  { page: 'Intro', message: "Go Back to the cross road" },
  { page: 'Bandit', message: "Explore the forest deeper"},
 
]
