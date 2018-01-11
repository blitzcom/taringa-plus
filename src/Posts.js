import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './Posts.css'
import * as actions from './posts/actions'
import { recentSelector, trendingSelector, popularsSelector } from './posts/selectors'

const iconsMap = {
  privado: { x: -3, y: 0 },
  juegos: { x: 0, y: -44 },
  imagenes: { x: 0, y: -64 },
  links: { x: 0, y: -88 },
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
  'recetas-y-cocina': { x: 0, y: -680 },
  mac: { x: 0, y: -702 },
  femme: { x: 0, y: -724 },
  'autos-motos': { x: 0, y: -744 },
  humor: { x: 0, y: -769 },
  'ebooks-tutoriales': { x: 0, y: -791 },
  'salud-bienestar': { x: 0, y: -811 },
  taringa: { x: 0, y: -440 },
  'economia-negocios': { x: 0, y: -849 },
  mascotas: { x: 0, y: -866 },
  turismo: { x: 0, y: -890 },
  'manga-anime': { x: 0, y: -912 },
  'ciencia-educacion': { x: 0, y: -961 },
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
      <a href={props.canonical} title={props.title} target='_blank'>
        {props.title}
      </a>
    </li>
  )
}

const PanelHOC = (head = 'Posts', col = 'col-md-5') => (WrappedComponent) => {
  return class PanelHOC extends Component {
    componentDidMount () {
      if (this.props.load) {
        this.props.load()
      }
    }

    isFetching () {
      const { control } = this.props
      return control.status === 'fetching'
    }

    hasError () {
      const { control } = this.props
      return control.status === 'failure'
    }

    handleRefresh () {
      if (this.props.refresh) {
        this.props.refresh()
      }
    }

    isEmpty () {
      const { control } = this.props
      return control.ids.length <= 0
    }

    render () {
      const { control } = this.props

      console.log(control)

      return (
        <div className={col}>
          <div className='panel panel-default'>
            <div className='panel-heading clearfix'>
              <button className='btn pull-right' onClick={this.handleRefresh.bind(this)}>
                <i className='fa fa-refresh'/>
              </button>
              {head}
            </div>
            {
              (this.isFetching() && !this.isEmpty()) && (
                <div className='panel-body'>
                  <div className="spinner-rect">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                  </div>
                </div>
              )
            }
            <div className='panel-body'>
              { this.hasError() && (
                  <div className='alert alert-danger text-center'>
                    <strong>
                      ¡Houston tenemos problemas! Intenta recargar la página
                    </strong>
                    <br/>
                    {control.error}
                  </div>
                )
              }
              {
                (this.isFetching() && this.isEmpty()) &&  (
                  <div className='spinner'>
                    <div className='double-bounce1'></div>
                    <div className='double-bounce2'></div>
                  </div>
                )
              }
              {
                (!this.isEmpty() && !this.hasError()) && (
                  <WrappedComponent {...this.props} />
                )
              }
            </div>
          </div>
        </div>
      )
    }
  }
}

const Recent = PanelHOC('Últimos Posts')(({ posts }) => (
  <ul className='list-unstyled'>
    { posts.map(post => <Post key={post.id} {...post}/>) }
  </ul>
))

const Trending = PanelHOC('Posts Destacados', 'col-md-12')(({ trending }) => (
  <ul className='list-unstyled'>
    { trending.map(post => <Post key={post.id} {...post}/>) }
  </ul>
))

const Populars = PanelHOC('Posts Populares', 'col-md-12')(({ populars }) => (
  <ul className='list-unstyled'>
    { populars.map(post => <Post key={post.id} {...post}/>) }
  </ul>
))

const Posts = (props) => (
  <div>
    <ul className='nav nav-tabs secondary-nav'>
      <li className='active'><Link to='/'>Inicio</Link></li>
      <li className=''><Link to='/'>Novatos</Link></li>
      <li className=''><Link to='/'>Destacados</Link></li>
    </ul>
    <div className='app-container'>
      <div className='row'>
        <Recent
          control={props.postsControl}
          load={props.fetchRecent}
          posts={props.posts}
          refresh={props.fetchRecent}
        />

        <div className='col-md-4'>
          <div className='row'>
            <Trending
              control={props.trendingControl}
              load={props.fetchTrending}
              trending={props.trending}
              refresh={props.fetchTrending}
            />
          </div>
          <div className='row'>
            <Populars
              control={props.popularsControl}
              load={props.fetchPopulars}
              populars={props.populars}
              refresh={props.fetchPopulars}
            />
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

const mapStateToProps = (state) => ({
  populars: popularsSelector(state),
  popularsControl: state.control.populars,
  posts: recentSelector(state),
  postsControl: state.control.recent,
  trending: trendingSelector(state),
  trendingControl: state.control.trending,
})

export default connect(mapStateToProps, actions)(Posts)
