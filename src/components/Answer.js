import React from 'react'
import { Link } from '@reach/router'
import './Answer.css'
import './Poping.css'
import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.css'
import ManaSphere from './ManaSphere.js'

const Answer = (props) =>
  <div className="row answers">
    <div className="col l12 m12">
      <div className="col l12 m12">
        { props.choices.map((choice, i) =>
          <Link to={`/story/${choice.page}`}><p className='poping'>{i + 1}. {choice.message}</p></Link>
        )}
      </div>
      <ManaSphere mana={props.mana} />
    </div>
  </div>

export default Answer
