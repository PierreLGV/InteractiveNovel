export const CHAPKA = 0
export const SUN_HELM = 1
export const LEATHER_BOOTS = 2

const items = [
  { name: 'CHAPKA' },
  { name: 'SUN_HELM' },
  { name: 'LEATHER_BOOTS' },
]

export default items
  .map(item => ({ ...item, imageUrl: require(`./images/items/${item.name}.png`) }))
