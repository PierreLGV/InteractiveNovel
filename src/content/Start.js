import React from 'react'
import image from '../images/backgrounds/clairiere.jpg'

export { image }

export const consequences = {
  setLife: 100,
  setMana: 20,
}

export const content =  
  <p>
    Une prime est offerte à celui ou celle qui liberera ces bois de l'emprise malefique du démon.
    Bonne chance, Magicien, et revenez victorieux !
  </p>

export const choices = [
  { page: 'Intro', message: "Partir a l'aventure" },
]
