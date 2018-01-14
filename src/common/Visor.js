import React, { Component } from 'react'

import './Visor.css'

import { addClass, removeClass } from '../Utils'

class Visor extends Component {
  componentDidMount () {
    addClass('body', 'noscroll')
  }

  componentWillUnmount () {
    removeClass('body', 'noscroll')
  }

  render () {
    const { children, close } = this.props

    return (
      <div className='visor'>
        <button
          className='close-visor btn'
          onClick={close}
        >
          <i className='fa fa-close fa-2x'/>
        </button>

        {children}
      </div>
    )
  }
}

Visor.defaultProps = {
  close: () => {}
}

export default Visor
