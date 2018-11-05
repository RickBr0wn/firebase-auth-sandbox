import React, { Component } from 'react'
// import firebase from 'firebase'
import fireB from '../config/config'

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      user: null
    }
  }

  authListener = () => {
    fireB.auth().onAuthStateChanged(user => {
      console.log(user)
      if(user) {
        this.setState({ user })
        // localStorage.setItem('user', user.uid)
      }else{
        this.setState({ user: null })
        // localStorage.removeItem('user')
      }
    })
  }

  componentDidMount() {
    this.authListener()
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state
  }

  render() {
    return (
      <div className="content">
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Email: </label>
          <input onChange={this.handleChange} id="email" />
          
          <label>Password: </label>
          <input onChange={this.handleChange} id="password" />

          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login
