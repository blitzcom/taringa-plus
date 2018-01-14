import React from 'react'

import PanelHOC from '../../common/PanelHOC'
import Shout from './Shout'

export const Shouts = ({ items, open }) => (
  <ul className='list-group'>
    { items.map(item => <Shout key={item.id} open={open} {...item}/>) }
  </ul>
)

export default PanelHOC()(Shouts)
