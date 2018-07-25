import React from 'react'
import image from '../images/backgrounds/hollandechapka.png'
import { RABBIT, CHAPKA } from '../items';

export { image }

export const consequences = {
  dropItems: [ CHAPKA ],
  mana: -30,
}

export const content =  
  <p>
    Intervention diplomatique
    A calm but short night, you feel tired from the lack of sleep.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aenean sed justo sapien. Aenean et metus auctor, euismod quam nec, lobortis metus. 
    Vivamus fermentum libero quis augue ultricies feugiat. Pellentesque sed euismod tellus. 
    Nullam et dui a lorem efficitur auctor eget vel quam. Fusce nec interdum mi, a lobortis neque. 
    Morbi vitae enim fringilla, lacinia nibh id, bibendum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.

  </p>

export const choices = [
  { page: 'Flambuisiness', message: "Faire affaire" , requires: { items: [ RABBIT ]}},
  { page: 'SolarFlareEsc', message: "Utiliser la force" },
  
]