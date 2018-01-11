import React from 'react'

import PanelHOC from '../../common/PanelHOC'
import Post from './Post'

export const Panel = ({ items }) => (
  <ul className='list-unstyled'>
    { items.map(item => <Post key={item.id} {...item}/>) }
  </ul>
)

export default PanelHOC()(Panel)
