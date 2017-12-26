import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import './App.css'
import Nav from './Nav'
import Section from './components/Section'

import { sectionsSelector } from './selectors/posts'
import * as actions from './actions/sections'

class App extends Component {
  render() {
    const { sections, fetch } = this.props

    return (
      <div>
        <Nav/>
        <Container className='app-container'>
          {
            sections.map(section => (
              <Section
                key={section.id}
                {...section}
                fetch={fetch}
              />
            ))
          }
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sections: sectionsSelector(state)
})

export default connect(mapStateToProps, actions)(App);
