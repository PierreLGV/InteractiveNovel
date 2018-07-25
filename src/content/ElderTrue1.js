import React from 'react'
import image from '../images/backgrounds/elder.jpg'
export { image }

export const content =  
  <p>
        Comment appelle-t-on une fonction anonyme ?
  </p>

export const choices = [
  { page: 'ElderFalse', message: "(Fn)"},
  { page: 'ElderFalse', message: "..."},
  { page: 'ElderTrue2', message: "Michel ?" },  
  { page: 'ElderFalse', message: "()"},
]
