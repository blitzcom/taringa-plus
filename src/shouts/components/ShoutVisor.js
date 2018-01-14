import React from 'react'

import './ShoutVisor.css'

const ShoutVisor = (props) => {
  return (
    <div className='shout-visor'>
      {
        props.body.length > 0 && (
          <p className='visor-body'>{props.body}</p>
        )
      }

      {
        (props.attachment && props.attachment.type === 'image') && (
          <img
            src={props.attachment.url}
            alt='Attachment'
            className='img-attachment'
          />
        )
      }
    </div>
  )
}

export default ShoutVisor
