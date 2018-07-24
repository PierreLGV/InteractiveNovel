import React from 'react'
import { Link } from '@reach/router'
import './Answer.css'
import './Poping.css'
import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.css'
import Mana from './Mana.js'

const Answer = (props) => 
  <div className="row answers">
    <div className="col l12 m12">
        <div className="col l12 m12">
          { props.choices.map(choice => 
              <Link to={`/story/${choice.page}`}><p className='poping'>{choice.message}</p></Link>
          )}
        </div>
          <Mana />
    </div>
  </div>
  
export default Answer