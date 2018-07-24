import React from 'react'
import image from '../images/lake.jpg'

export { image }

export const consequences = {
  pickUp: [1]
}


export const content =  
  <p>
    Far away, swall canoes are going out of sight.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aenean sed justo sapien. Aenean et metus auctor, euismod quam nec, lobortis metus. 
    Vivamus fermentum libero quis augue ultricies feugiat. Pellentesque sed euismod tellus. 
    Nullam et dui a lorem efficitur auctor eget vel quam. Fusce nec interdum mi, a lobortis neque. 
    Morbi vitae enim fringilla, lacinia nibh id, bibendum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.

  </p>

export const choices = [
  { page: 'LakeStatue', message: "Swim in the water for a while" },
  { page: 'DiveIntoTheLake', message: "Look for fishes"},
  { page: 'Bonefire', message: "Inspect the bottom of the lake"},
  { page: 'GatherFood', message: "Relax and enjoy the refreshing water"},
]
