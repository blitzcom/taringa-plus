import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './Posts.css'

import Shouts from '../../shouts/components/Shouts'
import ShoutVisor from '../../shouts/components/ShoutVisor'
import { fetchRecentShouts, openShout, closeShout } from '../../shouts/actions'
import { shoutsSelector, shoutSelector } from '../../shouts/selectors'

import Panel from './Panel'
import PostReader from './PostReader'
import * as actions from '../actions'
import * as selectors from '../selectors'

import Modal from '../../common/Modal'
import Visor from '../../common/Visor'

import Search from '../../search/components/Search'

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
          open={props.readPost}
        />

        <div className='col-md-4'>
          <div className='row'>
            <Search/>
            <Panel
              control={props.trendingControl}
              load={props.fetchTrending}
              refresh={props.fetchTrending}
              items={props.trending}
              title='Posts Destacados'
              open={props.readPost}
            />
            <Panel
              control={props.popularsControl}
              items={props.populars}
              load={props.fetchPopulars}
              refresh={props.fetchPopulars}
              title='Posts Populares'
              open={props.readPost}
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
          open={props.openShout}
        />

        {
          props.post && (
            <Modal>
              <Visor close={props.closeReader}>
                <PostReader {...props.post} />
              </Visor>
            </Modal>
          )
        }
        {
          props.shout && (
            <Modal>
              <Visor close={props.closeShout}>
                <ShoutVisor {...props.shout}/>
              </Visor>
            </Modal>
          )
        }
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  populars: selectors.popularsSelector(state),
  popularsControl: state.control.populars,
  post: selectors.postSelector(state),
  posts: selectors.recentSelector(state),
  postsControl: state.control.recent,
  shout: shoutSelector(state),
  shouts: shoutsSelector(state),
  shoutsControl: state.control.shouts,
  trending: selectors.trendingSelector(state),
  trendingControl: state.control.trending,
})

const mapDispatchToProps = (dispatch) => ({
  closeReader: () => dispatch(actions.closeReader()),
  closeShout: () => dispatch(closeShout()),
  fetchPopulars: () => dispatch(actions.fetchPopulars()),
  fetchRecent: (page) => dispatch(actions.fetchRecent(page)),
  fetchShouts: () => dispatch(fetchRecentShouts()),
  fetchTrending: () => dispatch(actions.fetchTrending()),
  openShout: (id) => dispatch(openShout(id)),
  readPost: (url) => dispatch(actions.readPost(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
