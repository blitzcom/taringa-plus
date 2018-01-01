import React, { Component } from 'react'
import { connect } from 'react-redux'

import Section from './Section'
import { sectionsSelector } from '../selectors/posts'
import * as actions from '../actions/sections'

export class Home extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
    this.props.clear()
  }

  componentWillUnmount () {
    this.props.clear()
  }

  render () {
    const { sections, fetch } = this.props

    return (
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
  }
}

Home.defaultProps = {
  clear: () => {},
  fetch: () => {},
  sections: []
}

const mapStateToProps = (state) => ({
  sections: sectionsSelector(state)
})

export default connect(mapStateToProps, actions)(Home)
