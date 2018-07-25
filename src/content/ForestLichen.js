import React from 'react'
import image from '../images/backgrounds/forestlichen.jpg'
import { LEATHER_BOOTS } from '../items'

export { image }

export const consequences = {
  pickUpRandomItems: [ LEATHER_BOOTS ] // todo: add more
}

export const content =  
  <p>
    Vous partez en quete de gibier pour votre repas du soir. Votre oeil exercé parviens a relever des empreintes d'animaux.
    Vous faite meme une trouvaille !!

  </p>

export const choices = [
  { page: 'HuntingTrap', message: "Cela vaut la peine de chasser dans les parages, il y a de nombreuses traces d'animaux." },
  
]
