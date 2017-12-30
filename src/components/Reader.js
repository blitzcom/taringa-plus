import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Item, Loader, Message } from 'semantic-ui-react'

import './Reader.css'

import Recommend from './Recommend'
import { fetch as fetchRecommends } from '../actions/recommends'
import * as actions from '../actions/reader'
import { defaultSelector, controlSelector } from '../selectors/reader'
import { recommendsSelector } from '../selectors/recommends'

import { toHTML } from '../BBCodeParser'

const createMarkup = (content) => ({ __html: toHTML(content) })

export class Reader extends Component {
  componentDidMount () {
    const { match } = this.props

    if (match && match.params && match.params.id) {
      this.props.fetchPost(match.params.id)
      this.props.fetchRecommends(match.params.id)
    }

    window.scrollTo(0, 0)
  }

  componentWillReceiveProps (nextProps) {
    const { match } = this.props

    if (match.params.id !== nextProps.match.params.id) {
      this.props.fetchPost(nextProps.match.params.id)
      this.props.fetchRecommends(nextProps.match.params.id)
      window.scrollTo(0, 0)
    }
  }

  render () {
    const { control, post, recommends } = this.props

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
        <div
          className='five wide column'
        >
          <Item.Group>
            {
              recommends.posts.map(post => (
                <Recommend key={post.id} {...post}/>
              ))
            }
          </Item.Group>
        </div>
      </div>
    )
  }
}

Reader.defaultProps = {
  fetchPost: () => {},
  fetchRecommends: () => {},
  recommends: {
    posts: []
  }
}

const mapStateToProps = (state, props) => ({
  control: controlSelector(state, props),
  post: defaultSelector(state, props),
  recommends: recommendsSelector(state)
})

const mapDispatchToProps = {
  fetchPost: actions.fetch,
  fetchRecommends: fetchRecommends
}

export default connect(mapStateToProps, mapDispatchToProps)(Reader)
