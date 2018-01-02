import React from 'react'
import { Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './Recommend.css'
import { getPostImageURL } from '../../Utils'

const PostFlat = (props) => {
  if (props.placeholder) {
    return (
      <Item>
        <div className='recommend-animated-background'>
          <div className='bg-masker recommend-vertical-separator'/>
          <div className='bg-masker recommend-title-separator'/>
          <div className='bg-masker recommend-owner-separator'/>
          <div className='bg-masker recommend-owner-right-separator'/>
          <div className='bg-masker recommend-visits-right-separator'/>
        </div>
      </Item>
    )
  }

  return (
    <Item>
      <Item.Image size='tiny' src={getPostImageURL(props, '1:1')}/>

      <Item.Content>
        <Item.Header
          as={Link}
          className='recommend-title'
          to={`/post/${props.id}`}
        >
          {props.title}
        </Item.Header>
        <Item.Meta>
          @{props.owner.nick}
        </Item.Meta>
        <Item.Meta>
          {props.visits} visitas
        </Item.Meta>
      </Item.Content>
    </Item>
  )
}

export default PostFlat
