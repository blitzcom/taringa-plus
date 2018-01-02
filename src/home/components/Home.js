import React, { Component } from 'react'
import { connect } from 'react-redux'

import Section from '../../sections/components/Section'
import { sectionsSelector } from '../../posts/selectors'
import * as actions from '../../sections/actions'

export class Home extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    const { sections, fetch, clear } = this.props

    return (
      <div>
        {
          sections.map(section => (
            <Section
              key={section.id}
              {...section}
              fetch={fetch}
              clear={clear}
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
