import React from 'react'

import './Comment.css'

const Comment = (props) => {
  const { body, likes, owner, reply, unlikes } = props

  return (
    <div className='comment'>
      <img
        className='avatar'
        src={owner.avatar.medium}
        alt='Avatar'
      />

      <div className='content'>
        <div className='user'>
          {owner.nick}
        </div>

        <p className='body'>
          {body}
        </p>

        <div className='actions'>
          <button
            className='btn btn-link'
            title='Respuestas'
          >
            <i className='fa fa-reply'/> {reply}
          </button>

          <button
            className='btn btn-link'
            title='+1'
          >
            <i className='fa fa-thumbs-o-up'/> {likes}
          </button>

          <button
            className='btn btn-link'
            title='-1'
          >
            <i className='fa fa-thumbs-o-down'/> {unlikes}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Comment
