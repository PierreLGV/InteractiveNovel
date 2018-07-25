import React, { Component } from 'react'
import { store, actions } from './store.js'
import { Router, Link } from '@reach/router'
import Profile from './components/Profile.js'
import Item from './components/Item.js'
import Text from './components/Text.js'
import LifeSphere from './components/LifeSphere.js'
import Answer from './components/Answer.js'
import './App.css'

const basepath = process.env.REACT_APP_BASEPATH || ''
console.log({ basepath })

const Page404 = () => <div>404 gros..</div>

const Menu = () =>
  <div>
    <Link to="story/Start">Start</Link>
  </div>

const Game = ({ state }) =>
  <div className="row">
    <div className=" character_sheet col s12 m4 l3">
      <Profile life={state.life}/>
      <Item {...actions} {...state}/>
    </div>
    <div className="col s12 m8 l6">
      <Router basepath={basepath}>
        <Text path="story/:pageName" {...actions} {...state} />
      </Router>
    </div>
    <div className="col s12 m4 l3">
      <Answer {...actions} {...state} />
    </div>
  </div>

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
        <Router basepath={basepath}>
          <Menu path="/" />
          <Game path="story/*" state={this.state} />
          <Page404 path="*" />
        </Router>
      </div>
    )
  }
}
export default App
