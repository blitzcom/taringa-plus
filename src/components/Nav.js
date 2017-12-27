import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <Menu fixed='top' size='large'>
      <Container>
        <Menu.Item header as={Link} to='/'>Taringa Plus!</Menu.Item>
      </Container>
    </Menu>
  )
}

export default Nav
