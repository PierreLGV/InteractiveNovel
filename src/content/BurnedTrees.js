import React from 'react'
import image from '../images/backgrounds/burnedTrees.jpg'
import { CHAPKA } from '../items'

export { image }

export const consequences = {
  pickUpItems: [ CHAPKA ],
  mana: -50  
}

export const content =  
  <p>
    Puiser dans vos ressource magique vous permet de lancer un puissant sortilege reduisant vos assaillants et une partie de la foret en cendre.
    Il ne vous reste quúne solution, retourner sur vos pas.

  </p>

export const choices = [
  { page: 'Intro', message: "Retourner a la croisée des chemins"},
]
