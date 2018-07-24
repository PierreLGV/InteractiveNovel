import React, { Component } from 'react'
import './Text.css' 
import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.css'

const globalStyle = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

class Text extends Component {
  constructor(props) {
    super(props)
    props.loadPage(import(`../content/${props.pageName}`))
  }
  componentDidUpdate(prevProps) {
    if (prevProps.pageName !== this.props.pageName) {
      this.props.loadPage(import(`../content/${this.props.pageName}`))
    }
  }
  render() {
    const style = {
      backgroundImage: `linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.1)), url(${this.props.backgroundImageUrl})`,
      ...globalStyle
    }

    return (
      <div className="row text" style={style}>
        <div className="col s12">
          {this.props.content}
        </div>
      </div>
    )
  }
}
    
export default Text