import React from 'react'

import Icon from '../../common/Icon'

const Post = (props) => (
  <li className='post-item'>
    <Icon title={props.category_name} icon={props.category_shortname} />
    <a href={props.canonical} title={props.title} target='_blank'>
      {props.title}
    </a>
  </li>
)

export default Post
