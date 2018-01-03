import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import './Posts.css'

const Post = (props) => (
  <a href='/' className='post-item'>
    <span class="glyphicon glyphicon-fire" aria-hidden="true"></span>
    Post item #{props.i + 1}
  </a>
)

const User = (props) => (
  <a href='/' className='post-item'>
    User {props.i} (1000)
  </a>
)

const Comment = (props) => (
  <div>
    <strong>user</strong>
    &nbsp;
    <a href='/'>
      comment details
    </a>
  </div>
)

const Posts = (props) => {
  return (
    <div>
      <ul className='nav nav-tabs secondary-nav'>
        <li className='active'><Link to='/'>Inicio</Link></li>
        <li className=''><Link to='/'>Novatos</Link></li>
        <li className=''><Link to='/'>Destacados</Link></li>
      </ul>
      <div className='app-container'>
        <div className='row'>
          <div className='col-md-5'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                Últimos Posts
              </div>
              <div className='panel-body'>
                {
                  _.times(30, (i) => (
                    <Post key={i} i={i}/>
                  ))
                }
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                Posts Destacados
              </div>
              <div className='panel-body'>
                {
                  _.times(10, (i) => (
                    <Post key={i} i={i}/>
                  ))
                }
              </div>
            </div>

            <div className='panel panel-default'>
              <div className='panel-heading'>
                Usuarios Top
              </div>
              <div className='panel-body'>
                {
                  _.times(10, i => (
                    <User key={i} i={i}/>
                  ))
                }
              </div>
            </div>

            <div className='panel panel-default'>
              <div className='panel-heading'>
                Últimos Comentarios
              </div>
              <div className='panel-body'>
                {
                  _.times(10, i => (
                    <Comment key={i} i={i}/>
                  ))
                }
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                Lorem ipsum
              </div>
              <div className='panel-body'>
                Lorem ipsum dolor
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts
