import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Posts from '../../posts/components/Posts'
import './Section.css'

export class Section extends Component {
  componentDidMount () {
    const { category, count, id, trending } = this.props
    this.props.fetch(id, category, count, trending)
  }

  componentWillUnmount () {
    this.props.clear(this.props.id)
  }

  render () {
    const { error, name, status, posts } = this.props

    return (
      <div className='section'>
        <Menu pointing secondary className='section-nav'>
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
  error: '',
  fetch: () => {},
  name: '#Section',
  posts: [],
  status: 'success',
  clear: () => {}
}

export default Section
