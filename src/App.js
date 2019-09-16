import React, { Component } from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route } from "react-router-dom"
import About from './components/About'
import Work from './components/Work'
import Skill from './components/Skill'
import Contact from './components/Contact'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route path='/about' component={About} />
            <Route path='/work' component={Work} />
            <Route path='/skill' component={Skill} />
            <Route path='/contact' component={Contact} />
          </div>
          
      </BrowserRouter>
    )
  }
}


