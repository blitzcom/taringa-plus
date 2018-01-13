import React from 'react'

import './Shout.css'

const Shout = (props) => (
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
        <a href={props.canonical} target='_blank' className='thumbnail'>
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

    <button className='btn btn-link btn-sm action'>
      <i className='fa fa-thumbs-o-up'/> {props.likes}
    </button>

    <button className='btn btn-link btn-sm action'>
      <i className='fa fa-comment-o'/> {props.replies}
    </button>

    <button className='btn btn-link btn-sm action'>
      <i className='fa fa-share'/> {props.forwards}
    </button>

    <button className='btn btn-link btn-sm action'>
      <i className='fa fa-expand'/>
    </button>
  </li>
)

export default Shout
