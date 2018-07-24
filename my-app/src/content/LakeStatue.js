import React from 'react'
import image from '../images/lakestatue.jpg'

export { image }

export const content =  
  <p>
    After a long swim, you face a gigantic statue deeply immerged in the lake.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aenean sed justo sapien. Aenean et metus auctor, euismod quam nec, lobortis metus. 
    Vivamus fermentum libero quis augue ultricies feugiat. Pellentesque sed euismod tellus. 
    Nullam et dui a lorem efficitur auctor eget vel quam. Fusce nec interdum mi, a lobortis neque. 
    Morbi vitae enim fringilla, lacinia nibh id, bibendum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.

  </p>

export const choices = [
  { page: 'LakeStatue', message: '1. Swim in the water for a while' },
  { page: 'MuddyWater', message: '2. Look for fishes'},
  { page: 'Bonefire', message: '3. Inspect the bottom of the lake'},
  { page: 'GatherFood', message: '4. Relax and enjoy the refreshing water'},
]
