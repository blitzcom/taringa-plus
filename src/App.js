import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Container className='app-container'>
            <Route exact path='/' component={Home}/>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
