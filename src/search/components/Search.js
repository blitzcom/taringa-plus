import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import './Search.css'
import { searchShouts, clearSearch } from '../../shouts/actions'
import { searchSelector } from '../selectors'

class Search extends Component {
  constructor (props) {
    super(props)
    this.handleSearch = _.debounce(this.handleSearch, 500)
  }

  startSearch () {
    if (!this.searchInput) {
      return
    }

    const { value } = this.searchInput

    this.props.searchShouts(value)
  }

  handleSearch () {
    this.startSearch()
  }

  handleClear () {
    this.searchInput.value = ''
    this.props.clearSearch()
  }

  render () {
    const { control } = this.props

    const searchIconClass = classNames('fa', {
      'fa-search': control.status !== 'fetching',
      'fa-spinner fa-spin': control.status === 'fetching'
    })

    return (
      <div className='col-md-12 search'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <div className='input-group'>
              <input
                className='form-control'
                ref={e => this.searchInput = e}
                placeholder='Buscar Shouts'
                onKeyUp={this.handleSearch.bind(this)}
              />
              <span className='input-group-btn'>
                {
                  control.query.length > 0 && (
                    <button
                      className='btn btn-default'
                      onClick={this.handleClear.bind(this)}
                    >
                      <i className='fa fa-close'/>
                    </button>
                  )
                }
                <button
                  className='btn btn-primary search-btn'
                  onClick={this.startSearch.bind(this)}
                >
                  <i className={searchIconClass}/>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearSearch: () => dispatch(clearSearch()),
  searchShouts: (query) => dispatch(searchShouts(query)),
})

const mapStateToProps = (state) => ({
  control:  searchSelector(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
