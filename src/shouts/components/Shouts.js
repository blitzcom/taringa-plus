import React from 'react'

import PanelHOC from '../../common/PanelHOC'
import Shout from './Shout'

export const Shouts = ({ items }) => (
  <ul className='list-group'>
    { items.map(item => <Shout key={item.id} {...item}/>) }
  </ul>
)

export default PanelHOC()(Shouts)
