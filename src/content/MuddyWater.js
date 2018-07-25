import React from 'react'
import image from '../images/backgrounds/muddywater.png'

export { image }

export const content =  
  <p>
    L'eau est trop trouble pour y distinguer quoi que ce soit.

  </p>

export const choices = [

  { page: 'LakeStatue', message: "Nagez un moment pour vous delacer les muscles." },
  { page: 'LakeBottom', message: "Inspect the bottom of the lake"},
  { page: 'DiveIntoTheLake', message: "Retourner sur la rive"},
]
