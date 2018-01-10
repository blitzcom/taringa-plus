import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import './Posts.css'
import * as actions from './posts/actions'
import { recentSelector, trendingSelector } from './posts/selectors'

const iconsMap = {
  privado: { x: -3, y: 0 },
  juegos: { x: 0, y: -44 },
  imagenes: { x: 0, y: -64 },
  links: { x: 0, y: -86 },
  videos: { x: 0, y: -110 },
  arte: { x: 0, y: -132 },
  offtopic: { x: 0, y: -154 },
  animaciones: { x: 0, y: -174 },
  musica: { x: 0, y: -198 },
  downloads: { x: 0, y: -217 },
  noticias: { x: 0, y: -242 },
  info: { x: 0, y: -243 },
  'tv-peliculas-series': { x: 0, y: -305 },
  patrocinados: { x: 0, y: -332 },
  poringueras: { x: 0, y: -418 },
  gay: { x: 0, y: -507 },
  relatos: { x: 0, y: -528 },
  linux: { x: 0, y: -547 },
  deportes: { x: 0, y: -572 },
  celulares: { x: 0, y: -593 },
  'apuntes-y-monografias': { x: 0, y: -616 },
  comics: { x: 0, y: -637 },
  solidaridad: { x: 0, y: -661 },
  'recetas-y-cocina': { x: 0, y: -678 },
  mac: { x: 0, y: -702 },
  femme: { x: 0, y: -724 },
  'autos-motos': { x: 0, y: -744 },
  humor: { x: 0, y: -769 },
  'ebooks-tutoriales': { x: 0, y: -789 },
  'salud-bienestar': { x: 0, y: -811 },
  taringa: { x: 0, y: -440 },
  'economia-negocios': { x: 0, y: -849 },
  mascotas: { x: 0, y: -866 },
  turismo: { x: 0, y: -890 },
  'manga-anime': { x: 0, y: -912 },
  'ciencia-ficcion': { x: 0, y: -958 },
  'hazlo-tu-mismo': { x: 0, y: -935 },
  ecologia: { x: 0, y: -459 },
}

const Post = (props) =>  {
  const icon = iconsMap[props.category_shortname] || iconsMap['taringa']

  const postStyle = {
    backgroundPosition: `${icon.x}px ${icon.y}px`
  }

  return (
    <li className='post-item'>
      <div className='post-icon' title={props.category_name} style={postStyle}></div>
      <a href={props.canonical} target='_blank'>
        {props.title}
      </a>
    </li>
  )
}

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

class Posts extends Component {
  componentDidMount () {
    this.props.fetchRecent()
    this.props.fetchTrending()
  }
  render () {
    const { posts, trending } = this.props

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
                  <ul className='list-unstyled'>
                    {
                      posts.map(post => <Post key={post.id} {...post}/>)
                    }
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='panel panel-default'>
                <div className='panel-heading'>
                  Posts Destacados
                </div>
                <div className='panel-body'>
                  <ul className='list-unstyled'>
                    {
                      trending.map(post => <Post key={post.id} {...post}/>)
                    }
                  </ul>
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
}

const mapStateToProps = (state) => ({
  posts: recentSelector(state),
  trending: trendingSelector(state)
})

export default connect(mapStateToProps, actions)(Posts)
