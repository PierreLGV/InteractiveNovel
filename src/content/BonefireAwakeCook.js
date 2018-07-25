import React from 'react'
import image from '../images/backgrounds/bonefireAwake.jpg'
import { RABBIT } from '../items';

export { image }

export const consequences = {
  dropItems: [ RABBIT ],
  life: +10,
}

export const content =  
  <p>
    Vous êtes repu et reposé. Une belle journée commence pour vous.
  </p>

export const choices = [
  { page: 'Intro', message: "Reprendre la route" },
]
