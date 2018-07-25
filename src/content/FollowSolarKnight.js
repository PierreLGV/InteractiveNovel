import React from 'react'
import image from '../images/backgrounds/followSolarKnight.jpg'

export { image }

export const content =  
  <p>
    L'homme depose son casque et monte au sommet de l'édifice.
  </p>

export const choices = [
  { page: 'StealSunHelm', message: "Voler le casque" },
  { page: 'MeetSolarKnight', message: "Aller se presenter"},
  { page: 'SolarFlare', message: "Jetter une pierre dans sa direction"},
]
