import React from 'react'
import image from '../images/backgrounds/muddywater.png'
import { RONDACHE } from '../items'

export { image }

export const consequences = {
  pickUpItems: [ RONDACHE ]
}

export const content =  
  <p>
    Vous fouillez la vase et trouvez un bouclier métalique de mauvaise facture.
  </p>

export const choices = [
  { page: 'LakeStatue', message: "Swim in the water for a while" },
  { page: 'MuddyWater', message: "Look for fishes"},
  { page: 'DiveIntoTheLake', message: "Retourner sur la rive"},
]
