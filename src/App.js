import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'

class App extends Component {
  
  render() {
          
    const Users = () => <div className="content"><h3>Users</h3></div>

    return (
      <BrowserRouter>
        <div className="App">
          <div className="front-camera"></div>
          <div className="speaker"></div>

          <div className="screen">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/login' component={Login} />
              <Route path='/users' component={Users} />
            </Switch>
            <Footer />
          </div>

          <div className="microphone"></div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
