import React from 'react'

import Icon from '../../common/Icon'
import { canonicalURLToRaw } from '../../Utils'

const markAsVisited = (e) => {
  window.history.pushState({}, e.target.textContent, e.target.href)
  window.history.pushState({}, e.target.textContent, window.location.origin)
}

const Post = (props) => (
  <li className='post-item'>
    <Icon title={props.category_name} icon={props.category_shortname} />
    <a
      href={canonicalURLToRaw(props.canonical)}
      onClick={e => {
        e.preventDefault()
        markAsVisited(e)
        props.open(props.canonical)
      }}
      title={props.title}
    >
      {props.title}
    </a>
  </li>
)

export default Post
