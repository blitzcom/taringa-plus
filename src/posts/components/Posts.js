import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './Posts.css'
import Panel from './Panel'

import * as actions from '../actions'
import * as selectors from '../selectors'

const Posts = (props) => (
  <div>
    <ul className='nav nav-tabs secondary-nav'>
      <li className='active'><Link to='/'>Inicio</Link></li>
      <li className=''><Link to='/'>Novatos</Link></li>
      <li className=''><Link to='/'>Destacados</Link></li>
    </ul>

    <div className='app-container'>
      <div className='row'>
        <Panel
          col='col-md-5'
          control={props.postsControl}
          items={props.posts}
          load={props.fetchRecent}
          paginator
          refresh={props.fetchRecent}
          maxPages={50}
          title='Últimos Posts'
        />

        <div className='col-md-4'>
          <div className='row'>
            <Panel
              control={props.trendingControl}
              load={props.fetchTrending}
              refresh={props.fetchTrending}
              items={props.trending}
              title='Posts Destacados'
            />
          </div>
          <div className='row'>
            <Panel
              control={props.popularsControl}
              items={props.populars}
              load={props.fetchPopulars}
              refresh={props.fetchPopulars}
              title='Posts Populares'
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
  populars: selectors.popularsSelector(state),
  popularsControl: state.control.populars,
  posts: selectors.recentSelector(state),
  postsControl: state.control.recent,
  trending: selectors.trendingSelector(state),
  trendingControl: state.control.trending,
})

export default connect(mapStateToProps, actions)(Posts)
