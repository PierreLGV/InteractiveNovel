import React from 'react'
import image from '../images/backgrounds/banditAmbush.jpg'

export { image }

export const consequences = {
  life: -10,
}

export const content =  
  <p>
    Un brigand ambusqué vous atteint d'une fleche au genoux. La douleur est intense mais vous tenez bon.

  </p>

export const choices = [
  { page: 'BurnedTrees', message: "Engager le combat avec l'ennemi", requires: { mana: 50 } },
  { page: 'GatherFood', message: "Fuir"},
]
