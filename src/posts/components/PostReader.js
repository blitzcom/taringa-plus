import React, { Component } from 'react'
import axios from 'axios'

class PostReader extends Component {
  componentDidMount () {
    axios.get('/raw/posts/imagenes/20107737/Mira-esta-casa-no-ha-cambiado-en-su-interior-durante-72-anos.html', {
      baseURL: ''
    })
      .then(response => {
        console.log(response)
        console.log(response.data)
      })
  }

  render () {
    return (
      <div className='col-md-12'>
        Visor Nav
      </div>
    )
  }
}

export default PostReader
