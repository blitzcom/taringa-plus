import React, { Component } from 'react'
import _ from 'lodash'
import axios from 'axios'
import cheerio from 'cheerio'

import './PostReader.css'
import { addClass, removeClass, canonicalURLToRaw } from '../../Utils'

class PostReader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      body: '',
      title: '',
      status: 'success',
      error: ''
    }
  }

  pauseBodyScroll () {
    addClass('body', 'noscroll')
  }

  unpauseBodyScroll () {
    removeClass('body', 'noscroll')
  }

  postRender () {
    const videos = this.body.querySelectorAll('.webm-js video')
    _.each(videos, video => video.play())
  }

  componentDidMount () {
    const { canonical } = this.props
    const { status } = this.state

    if (status === 'fetching') {
      return
    }

    this.cancelToken = axios.CancelToken.source()

    this.setState({ status: 'fetching' }, () => {
      this.pauseBodyScroll()

      const rawURL = canonicalURLToRaw(canonical)

      axios.get(rawURL, {
        baseURL: '',
        cancelToken: this.cancelToken.token
      })
        .then(response => response.data)
        .then(data => {
          const $ = cheerio.load(data)

          $('script').remove()
          $('.poster').remove()

          return {
            body: $('.main-content-post').html(),
            status: 'success',
            title: $('.post-title').text(),
          }
        })
        .then(post => this.setState(post, this.postRender))
        .catch(error => {
          if (axios.isCancel(error)) {
            return
          }

          this.setState({ error: error.message, status: 'failure' })
        })
    })
  }

  componentWillUnmount () {
    this.unpauseBodyScroll()
    this.cancelToken.cancel('Post load canceled by user')
  }

  closeReader (e) {
    e.preventDefault()
    this.props.close()
  }

  render () {
    const { body, title, status, error } = this.state

    return (
      <div className='post-reader'>
        <div className='post-content'>
          <h1>{title}</h1>
          <hr/>
          {
            status === 'failure' && (
              <div className='alert alert-danger text-center'>
                <strong>
                  ¡Houston tenemos problemas! Intenta recargar la página
                </strong>
                <br/>
                {error}
              </div>
            )
          }
          {
            status === 'fetching' && (
              <div className='spinner'>
                <div className='double-bounce1'></div>
                <div className='double-bounce2'></div>
              </div>
            )
          }
          <div
            ref={e => this.body = e}

            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
        <div className='post-info'>
        </div>
        <button
          className='close-reader btn'
          onClick={this.closeReader.bind(this)}
        >
          <i className='fa fa-close fa-2x'/>
        </button>
      </div>
    )
  }
}

export default PostReader
