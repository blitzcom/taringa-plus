import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import './Spinner.css'

import Posts from './posts/components/Posts'
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
            <Route exact path='/' component={Posts}/>
            <Footer/>
          </div>
          <div className='app-decorator app-decorator-bottom blue-bg'/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
