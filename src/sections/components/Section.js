import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Posts from '../../posts/components/Posts'

export class Section extends Component {
  componentDidMount () {
    const { category, count, id, trending } = this.props
    this.props.fetch(id, category, count, trending)
  }

  render () {
    const { error, name, status, posts } = this.props

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item active>
            {name}
          </Menu.Item>
        </Menu>
        <Posts
          fetchControl={{ error: error, status: status }}
          posts={posts}
        />
      </div>
    )
  }
}

Section.defaultProps = {
  fetch: () => {},
  posts: []
}

export default Section
