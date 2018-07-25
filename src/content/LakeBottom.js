import React from 'react'
import image from '../images/backgrounds/forestMan.jpg'
import { RONDACHE } from '../items'

export { image }

export const consequences = {
  pickUpItems: [ RONDACHE ]
}

export const content =  
  <p>
    Vous fouillé
  </p>

export const choices = [
  { page: 'ForestLeftRoad', message: "Revenir sur vos pas" },
  { page: 'FollowSolarKnight', message: "Suivre" },
  { page: 'SolarKnight', message: "Jeter une pierre dans sa direction" },
]
