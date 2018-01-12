import React from 'react'

import PanelHOC from '../../common/PanelHOC'
import Post from './Post'

export const Panel = ({ items }) => (
  <div className='panel-body'>
    <ul className='list-unstyled'>
      { items.map(item => <Post key={item.id} {...item}/>) }
    </ul>
  </div>
)

export default PanelHOC()(Panel)
