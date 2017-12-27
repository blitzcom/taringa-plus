import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader, Message } from 'semantic-ui-react'

import * as actions from '../actions/reader'
import { defaultSelector, controlSelector } from '../selectors/reader'

const createMarkup = (content) => ({ __html: content })

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
      <div dangerouslySetInnerHTML={createMarkup(post.body)}/>
    )
  }
}

const mapStateToProps = (state, props) => ({
  post: defaultSelector(state, props),
  control: controlSelector(state, props)
})

export default connect(mapStateToProps, actions)(Reader)
