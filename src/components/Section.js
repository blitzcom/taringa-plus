import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Posts from './Posts'
import './Section.css'

export class Section extends Component {
  componentDidMount () {
    const { category, count, id, trending } = this.props
    this.props.fetch(id, category, count, trending)
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
  status: 'success'
}

export default Section
