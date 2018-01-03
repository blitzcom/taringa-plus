import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import Home from './home/components/Home'
import Reader from './readers/components/Reader'
import Nav from './Nav'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <div className='app-decorator app-decorator-top blue-bg'/>
          <div className='app-wrapper blue-bg'>
            <Nav/>
            <div className='app-container'>
              contenido
            </div>
            <Footer/>
          </div>
          <div className='app-decorator app-decorator-bottom blue-bg'/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
