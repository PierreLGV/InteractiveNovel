import React from 'react'
import image from '../images/backgrounds/clairiere.jpg'

export { image }

export const content =  
  <p>
    You've been walking all day, several options offers to you.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aenean sed justo sapien. Aenean et metus auctor, euismod quam nec, lobortis metus. 
    Vivamus fermentum libero quis augue ultricies feugiat. Pellentesque sed euismod tellus. 
    Nullam et dui a lorem efficitur auctor eget vel quam. Fusce nec interdum mi, a lobortis neque. 
    Morbi vitae enim fringilla, lacinia nibh id, bibendum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.
  </p>

export const choices = [
  { page: 'ForestLeftRoad', message: "Take the road on your left" },
  { page: 'DiveIntoTheLake', message: "Inspect the river nearby"},
  { page: 'Bonefire', message: "Light a bonefire and rest for the night"},
  { page: 'GatherFood', message: "Gather some food, the woods are full of animals"},
]
