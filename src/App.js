import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import './App.css'
import Nav from './Nav'
import Section from './sections/components/Section'

import { sectionsSelector } from './posts/selectors'
import * as actions from './posts/actions'

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
