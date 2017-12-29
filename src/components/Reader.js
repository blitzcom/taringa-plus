import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader, Message } from 'semantic-ui-react'

import './Reader.css'

import * as actions from '../actions/reader'
import { defaultSelector, controlSelector } from '../selectors/reader'

import { toHTML } from '../BBCodeParser'

const createMarkup = (content) => ({ __html: toHTML(content) })

export class Reader extends Component {
  componentDidMount () {
    const { match } = this.props

    if (match && match.params && match.params.id) {
      this.props.fetch(match.params.id)
    }

    window.scrollTo(0, 0)
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

    if (control.status === 'failure') {
      return (
        <Message
          icon='frown'
          header='Houston, tenemos un problema!'
          content='Ha ocurrido un error. Intenta recargar la página.'
          negative
        />
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

Reader.defaultProps = {
  fetch: () => {}
}

const mapStateToProps = (state, props) => ({
  post: defaultSelector(state, props),
  control: controlSelector(state, props)
})

export default connect(mapStateToProps, actions)(Reader)
