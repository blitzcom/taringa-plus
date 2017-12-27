import React from 'react'
import { connect } from 'react-redux'

import Section from './Section'
import { sectionsSelector } from '../selectors/posts'
import * as actions from '../actions/sections'

const Home = ({ sections, fetch }) => (
  <div>
    {
      sections.map(section => (
        <Section
          key={section.id}
          {...section}
          fetch={fetch}
        />
      ))
    }
  </div>
)

const mapStateToProps = (state) => ({
  sections: sectionsSelector(state)
})

export default connect(mapStateToProps, actions)(Home)
