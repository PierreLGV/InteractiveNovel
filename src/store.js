import { createStore } from 'redux'
import leatherboots from './images/leatherboots.png'
import harlequincrest from './images/harlequincrest.gif'
import lazarusspire from './images/lazarusspire.gif'
import sash from './images/sash.gif'
import rondache from './images/rondache.gif'
import quilted from './images/quilted.gif'
import gnarledstaff from './images/gnarledstaff.gif'
import avatar from './images/avatar.png'

const items = [
  { name: 'leatherboots', img: leatherboots },
  { name: 'harlequincrest', img: harlequincrest },
  { name: 'lazarusspire', img: lazarusspire },
  { name: 'sash', img: sash },
  { name: 'rondache', img: rondache },
  { name: 'quilted', img: quilted },
]

const initialState = {
  background: 'linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.1))',
  content: 'loading',
  choices: [],
  life: 70,
  inventory: [
    items[0],
    items[5],
  ]
}

const reducer = (state, action) => {
  if (action.type === 'LOAD_PAGE') {
    return {
      ...state,
      content: action.page.content,
      backgroundImageUrl: action.page.image,
      choices: action.page.choices
    }
  }
  if (action.type === 'LOAD_INVENTORY') {
    return {
      ...state,
      inventory: action.inventory
    }
  }
  if (action.type === 'REMOVE_LIFE') {
    return {
      ...state,
      life: action.life
    }
  }
  return state
}

export const store = createStore(reducer, initialState)

const loadPage = async loadingPage => {
  store.dispatch({ type: 'LOAD_PAGE', page: await loadingPage })
}
const loadInventory = () => {
  store.dispatch({ type: 'LOAD_INVENTORY'})
}
const removeLife = () => {
  const random = Math.random(Math.floor(0, 10))
  const removeLife = this.state.life - random
  store.dispatch({ type: 'REMOVE_LIFE', removeLife})
}
const addItem = () => {
  store.dispatch({ type: 'ADD_ITEM',})
}

export const actions = {
  loadPage,
  removeLife,
  addItem
}
