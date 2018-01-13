import React from 'react'

import './PostInfo.css'

const PostInfo = (props) => (
  <div className='post-info'>
    <div className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object"
            src={props.avatar.medium}
            alt={props.nick}
          />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{props.nick}</h4>

        <p>
          {props.range.sanitizedName}

          <button
            className='btn btn-sm pull-right user-action'
            title='Seguir'
          >
            <i className='fa fa-eye'/> {props.likes}
          </button>

          <button
            className='btn btn-sm pull-right user-action'
            title='Enviar mensaje'
          >
            <i className='fa fa-envelope-o'/> {props.likes}
          </button>
        </p>
      </div>
    </div>
    <hr/>
  </div>
)

export default PostInfo
