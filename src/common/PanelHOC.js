import React, { Component } from 'react'

import Paginator from './Paginator'

const PanelHOC = () => (WrappedComponent) => {
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
      const {
        col,
        control,
        load,
        maxPages,
        paginator,
        title,
      } = this.props

      return (
        <div className={col || 'col-md-12'}>
          <div className='panel panel-default'>
            <div className='panel-heading clearfix'>
              <button className='btn pull-right' onClick={this.handleRefresh.bind(this)}>
                <i className='fa fa-refresh'/>
              </button>
              {
                (this.isFetching() && !this.isEmpty()) && (
                  <div className='spinner-rect pull-right'>
                    <div className='rect1'></div>
                    <div className='rect2'></div>
                    <div className='rect3'></div>
                    <div className='rect4'></div>
                    <div className='rect5'></div>
                  </div>
                )
              }
              {title}
            </div>
            { this.hasError() && (
              <div className='panel-body'>
                <div className='alert alert-danger text-center'>
                  <strong>
                    ¡Houston tenemos problemas! Intenta recargar la página
                  </strong>
                  <br/>
                  {control.error}
                </div>
              </div>
              )
            }
            {
              (this.isFetching() && this.isEmpty()) &&  (
                <div className='panel-body'>
                  <div className='spinner'>
                    <div className='double-bounce1'></div>
                    <div className='double-bounce2'></div>
                  </div>
                </div>
              )
            }
            {
              (!this.isEmpty() && !this.hasError()) && (
                <WrappedComponent {...this.props} />
              )
            }
            {
              (!this.isEmpty() && !this.hasError() && paginator) &&
              <div className='panel-body'>
                <Paginator
                  currentPage={control.page}
                  load={load}
                  maxPages={maxPages}
                />
              </div>
            }
          </div>
        </div>
      )
    }
  }
}

export default PanelHOC
