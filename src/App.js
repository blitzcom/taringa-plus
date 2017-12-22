import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './App.css'
import Nav from './Nav'
import Posts from './Posts'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Container className='app-container'>
          <Posts/>
        </Container>
      </div>
    );
  }
}

export default App;
