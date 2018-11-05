import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Footer extends Component {
  render() {
    return (   
      <div className="footer">
        <Link to="/"><i className="fas fa-home"></i></Link>
        <Link to="/login"><i className="fas fa-sign-in-alt"></i></Link>
        <Link to="/users"><i className="fas fa-sticky-note"></i></Link>
      </div>
    )
  }
}

export default Footer