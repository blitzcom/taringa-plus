import React from 'react'

import './Visor.css'

const Visor = (props) => (
  <div className='visor'>
    <div className='container'>
      {props.children}
    </div>
  </div>
)

export default Visor
