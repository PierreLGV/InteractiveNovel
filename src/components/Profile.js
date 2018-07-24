import React from 'react'
import './Profile.css'
import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.css'
import LifeSphere from './LifeSphere.js'

const Profile = (props) =>

  <div className="row profile_thumbnail">
      <div className='col l8 offset-l2 m8 offset-m2 s8 offset-s2 profile_picture'>
        <div className='character_name'>
          <h1>Gandalf</h1>
        </div>
      </div>
      <LifeSphere life={props.life} />
    </div>

export default Profile
