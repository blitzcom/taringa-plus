import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './Posts.css'

import Shouts from '../../shouts/components/Shouts'
import { fetchRecentShouts } from '../../shouts/actions'
import { shoutsSelector } from '../../shouts/selectors'

import Panel from './Panel'
import PostReader from './PostReader'
import * as actions from '../actions'
import * as selectors from '../selectors'

import Modal from '../../common/Modal'
import Visor from '../../common/Visor'

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

        <Shouts
          title='Shouts'
          col='col-md-3'
          load={props.fetchShouts}
          control={props.shoutsControl}
          refresh={props.fetchShouts}
          items={props.shouts}
        />

        <Modal>
          <Visor>
            <div className='row'>
              <PostReader />
              <div className='col-md-8'>
                <img src='https://placehold.it/1920x1080' alt='Full HD' style={{ maxWidth: '100%', height: 'auto' }}/>
              </div>
            </div>
          </Visor>
        </Modal>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  populars: selectors.popularsSelector(state),
  popularsControl: state.control.populars,
  posts: selectors.recentSelector(state),
  postsControl: state.control.recent,
  shouts: shoutsSelector(state),
  shoutsControl: state.control.shouts,
  trending: selectors.trendingSelector(state),
  trendingControl: state.control.trending,
})

const mapDispatchToProps = (dispatch) => ({
  fetchPopulars: () => dispatch(actions.fetchPopulars()),
  fetchRecent: () => dispatch(actions.fetchRecent()),
  fetchShouts: () => dispatch(fetchRecentShouts()),
  fetchTrending: () => dispatch(actions.fetchTrending()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
