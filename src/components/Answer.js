import React from 'react'
import { Link, navigate } from '@reach/router'
import './Answer.css'
import './Poping.css'
import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.css'
import ManaSphere from './ManaSphere.js'

const requiresToString = requires => {
  if (!requires) return ''
  
  const reqs = Object.entries(requires)
    .map(([ k, v ]) => `${k}: ${v}`)
    .join(', ')  // [ [ 'mana', 100 ], [ 'life', 20 ] ]  -> (mana: 100, life: 20)

  return `(${reqs})`
}

const validateRequires = (requires, state) => {
  if (!requires) return true

  if (requires.mana && state.mana < requires.mana) return false

  return true
}

const ChoiceBox = ({ i, choice, state }) => {
  const canDo = validateRequires(choice.requires, state)

  return (
    <div className='choice_box' onClick={canDo ? () => navigate(`/story/${choice.page}`) : () => {}}>
      <p className={canDo ? 'poping' : ''}>
        {i + 1}. {choice.message}
        <span className='requires'> {requiresToString(choice.requires)}</span>
      </p>
    </div>
  )
}
  

const Answer = (props) => {
  const choices = props.choices.map((choice, i) => <ChoiceBox key={i} i={i} choice={choice} state={props} />)

  return (
    <div className="row answers">
      <div className="col l12 m12">
        <div className="col l12 m12">
          {choices}
        </div>
        <ManaSphere mana={props.mana} />
      </div>
    </div>
  )
}

export default Answer
