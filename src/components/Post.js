import React from 'react'
import TimeAgo from 'react-timeago'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { getPostImageURL, esFormatter } from '../Utils'

const Post = (props) => (
  <Card key={props.id}>
    <Image src={getPostImageURL(props)}/>
    <Card.Content>
      <Card.Header
        as={Link}
        to={`/post/${props.id}`}
      >
        {props.title}
      </Card.Header>
      <Card.Meta>
        <TimeAgo
          date={props.created}
          formatter={esFormatter}
        />
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Image src={props.owner.avatar.medium} avatar/>
      {props.owner.nick}
    </Card.Content>
  </Card>
)

export default Post
