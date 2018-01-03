import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

const Nav = (props) => {
  return (
    <div>
      <div className='nav-head'>
        <Link to='/' className='logo'/>
      </div>
      <nav className='navbar navbar-default main-nav'>
        <ul className='nav navbar-nav'>
          <li className='active'><Link to='/'>Posts</Link></li>
          <li className=''><Link to='/'>Comunidades</Link></li>
          <li className=''><Link to='/'>Tops</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
