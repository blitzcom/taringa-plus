import _ from 'lodash'
import React, { Component } from 'react'
import TimeAgo from 'react-timeago'
import { connect } from 'react-redux'
import {
  Comment,
  Header,
  Item,
  Loader,
  Message
} from 'semantic-ui-react'

import './Reader.css'
import { esFormatter } from '../Utils'

import Recommend from './Recommend'

import { fetch as fetchRecommends } from '../actions/recommends'
import { fetch as fetchComments } from '../actions/comments'
import * as actions from '../actions/reader'

import { defaultSelector, controlSelector } from '../selectors/reader'
import { recommendsSelector } from '../selectors/recommends'
import { commentsSelector } from '../selectors/comments'

import { toHTML } from '../BBCodeParser'

const createMarkup = (content) => ({ __html: toHTML(content) })

export class Reader extends Component {
  componentDidMount () {
    const { match } = this.props

    if (match && match.params && match.params.id) {
      const id = match.params.id

      this.props.fetchPost(id)
      this.props.fetchRecommends(id)
      this.props.fetchComments(id)
    }

    window.scrollTo(0, 0)
  }

  componentWillReceiveProps (nextProps) {
    const { match } = this.props

    if (match.params.id !== nextProps.match.params.id) {
      const id = nextProps.match.params.id

      this.props.fetchPost(id)
      this.props.fetchRecommends(id)
      this.props.fetchComments(id)

      window.scrollTo(0, 0)
    }
  }

  renderRecommends () {
    const { recommends } = this.props

    if (recommends.status === 'fetching') {
      return (
        <Item.Group>
          {
            _.times(20, (i) => ({ id: i})).map(item => (
              <Recommend key={item.id} placeholder/>
            ))
          }
        </Item.Group>
      )
    }

    return (
      <Item.Group>
        {
          recommends.posts.map(post => (
            <Recommend key={post.id} {...post}/>
          ))
        }
      </Item.Group>
    )
  }

  render () {
    const { control, post, comments } = this.props

    console.log(this.props)

    if (!control) {
      return null
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
        <div className='eleven wide column'>
          {
            control.status === 'fetching' && <Loader active inline='centered'/>
          }
          {
            (control.status === 'success' && post) && (
              <div dangerouslySetInnerHTML={createMarkup(post.body)}/>
            )
          }
          {
            control.status === 'success' && (
              <Comment.Group>
                <Header dividing>Comentarios</Header>
                {
                  comments.map(comment => (
                    <Comment key={comment.id}>
                      <Comment.Avatar src={comment.owner.avatar.big}/>
                      <Comment.Content>
                        <Comment.Author as='a'>
                          {comment.owner.nick}
                        </Comment.Author>
                        <Comment.Metadata>
                          <TimeAgo
                            date={comment.created}
                            formatter={esFormatter}
                          />
                        </Comment.Metadata>
                        <Comment.Text>
                          {comment.body}
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>Responder</Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  ))
                }
              </Comment.Group>
            )
          }
        </div>
        <div
          className='five wide column'
        >
          { this.renderRecommends() }
        </div>
      </div>
    )
  }
}

Reader.defaultProps = {
  fetchPost: () => {},
  fetchRecommends: () => {},
  fetchComments: () => {},
  recommends: {
    posts: []
  },
  comments: []
}

const mapStateToProps = (state, props) => ({
  comments: commentsSelector(state),
  control: controlSelector(state, props),
  post: defaultSelector(state, props),
  recommends: recommendsSelector(state)
})

const mapDispatchToProps = {
  fetchComments: fetchComments,
  fetchPost: actions.fetch,
  fetchRecommends: fetchRecommends
}

export default connect(mapStateToProps, mapDispatchToProps)(Reader)
