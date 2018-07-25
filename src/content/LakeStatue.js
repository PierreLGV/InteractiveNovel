import React from 'react'
import image from '../images/backgrounds/lakestatue.jpg'

export { image }

export const content =  
  <p>
    Apres une longue baignade, vous decouvrez une gigantsque statue partielleement angloutie.

  </p>

export const choices = [
  { page: 'PreyLakeStatue', message: "Priez respectueusement la statue primitive" },
  { page: 'DisrespectLakeStatue', message: "Maudissez la statue payenne."},
  { page: 'DiveIntoTheLake', message: "Ignorer votre découverte et regagner la rive."},
]
