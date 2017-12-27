import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Reader from './components/Reader'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Container className='app-container'>
            <Route exact path='/' component={Home}/>
            <Route path='/post/:id' component={Reader}/>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
