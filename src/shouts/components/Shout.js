import React from 'react'

import './Shout.css'

const Shout = (props) => {
  return (
    <li className='list-group-item shout'>
      <div className='user'>
        <img src='https://placehold.it/24' className='img-circle'/>
        <span className='name'>
          #NICK
        </span>
      </div>

      <p className='body'>
        {props.body}
      </p>

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

      <button className='btn btn-link btn-sm'>
        <i className='fa fa-thumbs-o-up'/> {props.likes}
      </button>

      <button className='btn btn-link btn-sm'>
        <i className='fa fa-comment-o'/> {props.replies}
      </button>

      <button className='btn btn-link btn-sm'>
        <i className='fa fa-share'/> {props.forwards}
      </button>

      <button className='btn btn-link btn-sm'>
        <i className='fa fa-expand'/>
      </button>
    </li>
  )
}

export default Shout
