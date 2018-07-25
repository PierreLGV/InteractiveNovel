export const CHAPKA = 0
export const SUN_HELM = 1
export const LEATHER_BOOTS = 2
export const RONDACHE = 3
export const RABBIT = 4
export const SUN_SHIRT = 5
export const LAZARUS_SPIRE = 6
 

const items = [
  { name: 'CHAPKA' },
  { name: 'SUN_HELM' },
  { name: 'LEATHER_BOOTS' },
  { name: 'RONDACHE' },
  { name: 'RABBIT' },
  { name: 'SUN_SHIRT' },
  { name: 'LAZARUS_SPIRE' },
  
  
]

export default items
  .map(item => ({ ...item, imageUrl: require(`./images/items/${item.name}.png`) }))
