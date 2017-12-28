import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader } from 'semantic-ui-react'

import './Reader.css'

import * as actions from '../actions/reader'
import { defaultSelector, controlSelector } from '../selectors/reader'

import { toHTML } from '../BBCodeParser'

const createMarkup = (content) => ({ __html: toHTML(content) })

class Reader extends Component {
  componentDidMount () {
    const { match } = this.props

    if (match && match.params && match.params.id) {
      this.props.fetch(match.params.id)
    }
  }

  render () {
    const { control, post } = this.props

    if (!control) {
      return null
    }

    if (control.status === 'fetching') {
      return (
        <Loader active inline='centered'/>
      )
    }

    return (
      <div className='ui grid'>
        <div
          className='eleven wide column'
          dangerouslySetInnerHTML={createMarkup(post.body)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  post: defaultSelector(state, props),
  control: controlSelector(state, props)
})

export default connect(mapStateToProps, actions)(Reader)
