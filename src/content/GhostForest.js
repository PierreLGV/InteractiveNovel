import React from 'react'
import image from '../images/backgrounds/forestMan.jpg'

export { image }

export const content =  
  <p>
    Une forme humanoide fantomatique brille au loin. Impossible de determiner de qui ou de QUOI il peut réellement s'agir.
  </p>

export const choices = [
  { page: 'ForestLeftRoad', message: "Revenir sur vos pas" },
  { page: 'FollowSolarKnight', message: "Suivre" },
  { page: 'SolarKnight', message: "Jeter une pierre dans sa direction" },
  
  
]
