import React from 'react'
import image from '../images/backgrounds/solarknight.jpg'

export { image }

export const content =  
  <p>
    Water is too muddy.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aenean sed justo sapien. Aenean et metus auctor, euismod quam nec, lobortis metus. 
    Vivamus fermentum libero quis augue ultricies feugiat. Pellentesque sed euismod tellus. 
    Nullam et dui a lorem efficitur auctor eget vel quam. Fusce nec interdum mi, a lobortis neque. 
    Morbi vitae enim fringilla, lacinia nibh id, bibendum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.

  </p>

export const choices = [
  { page: 'Excuses', message: "S'excuser et argumenter", 
  // requires: item[7] 
},
  { page: 'SolarFlare', message: "Engager le combat"},
  { page: 'RunAway', message: "Tenter de prendre la fuite"},
]
