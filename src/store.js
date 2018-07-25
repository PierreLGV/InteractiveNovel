import { createStore } from 'redux'
import { CHAPKA, LAZARUS_SPIRE, RONDACHE } from './items';
import { RABBIT } from './items';


const initialState = {
  background: 'linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.1))',
  content: 'loading',
  choices: [],
  life: 100, //0,
  mana: 20, //0,
  gameOver: false,
  inventory: []
}

const reducer = (state, action) => {

  if (action.type === 'LOAD_PAGE') {
    const consequences = action.page.consequences
    const newState = {
      ...state,
      content: action.page.content,
      backgroundImageUrl: action.page.image,
      choices: action.page.choices
    }

    if (consequences) {
      newState.life = consequences.setLife || state.life
      newState.mana = consequences.setMana || state.mana
      newState.inventory = consequences.setInventory || state.inventory
      
      newState.life += consequences.life || 0
      newState.mana += consequences.mana || 0
      
      newState.inventory = [ ...state.inventory, ...(consequences.pickUpItems || []) ] // todo: handle duplicates

      if (consequences.pickUpRandomItems) {
        const randomIndex = Math.floor(Math.random() * consequences.pickUpRandomItems.length)
        const randomItemIndex = consequences.pickUpRandomItems[randomIndex]

        newState.inventory = [ ...newState.inventory, randomItemIndex ]
      }

      if (consequences.dropItems) {
        newState.inventory = newState.inventory.filter(itemIndex => !consequences.dropItems.includes(itemIndex))
      }
    }

    return newState
  }
  
  return state
}

export const store = createStore(reducer, initialState)

const loadPage = async loadingPage => {
  store.dispatch({ type: 'LOAD_PAGE', page: await loadingPage })
}

export const actions = {
  loadPage,
}
