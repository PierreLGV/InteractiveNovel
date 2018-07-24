import React, { Component } from 'react'
import { store, actions } from './store.js'
import { Router } from '@reach/router'
import './App.css'
import Profile from './components/Profile.js'
import Item from './components/Item.js'
import Text from './components/Text.js'
import LifeSphere from './components/LifeSphere.js'
import Answer from './components/Answer.js'
// import GameOver from './content/GameOver.js'

const Page404 = () => <div>404</div>
const GameOver = () => <div>Game Over</div>

class App extends Component {
  constructor() {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.gameOver
        ? <GameOver />
        :
        <div className="row">
          <div className=" character_sheet col s12 m4 l3">
            <Profile life={this.state.life}/>
            <Item {...actions} {...this.state}/>
          </div>
          <div className="col s12 m8 l6">
            <Router>
              <Text path="/story/:pageName" {...actions} {...this.state} />
              <Page404 path="/*" />
            </Router>
          </div>
          <div className="col s12 m4 l3">
            <Answer {...actions} {...this.state} />
          </div>
        </div>
      }
      </div>
    )
  }
}
export default App
