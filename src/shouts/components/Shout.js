import React from 'react'

import './Shout.css'
import { humanizeNum } from '../../Utils'

const Shout = (props) => {
  const handleOpen = (e) => {
    e.preventDefault()
    props.open(props.id)
  }

  return (
    <li className='list-group-item shout'>
      {
        props.owner && (
          <div className='user'>
            <img
              src={props.owner.avatar.small}
              className='img-circle'
              alt={props.owner.nick}
            />
            <span className='name'>
              {props.owner.nick}
            </span>
          </div>
        )
      }

      {
        props.attachment && (
          <a
            className='thumbnail'
            href={props.canonical}
            onClick={handleOpen}
          >
            <div className='embed-responsive embed-responsive-4by3'>
              <img
                className='embed-responsive-item'
                src={props.attachment.thumbnail}
                alt={props.body}
              />
            </div>
          </a>
        )
      }

      <button className='btn btn-link btn-sm action' >
        <i className='fa fa-thumbs-o-up'/> {humanizeNum(props.likes)}
      </button>

      <button className='btn btn-link btn-sm action'>
        <i className='fa fa-comment-o'/> {humanizeNum(props.replies)}
      </button>

      <button className='btn btn-link btn-sm action'>
        <i className='fa fa-share'/> {humanizeNum(props.forwards)}
      </button>

      <a
        className='btn btn-link btn-sm action'
        href={props.canonical}
        target='_blank'
      >
        <i className='fa fa-expand'/>
      </a>
    </li>
  )
}

export default Shout
