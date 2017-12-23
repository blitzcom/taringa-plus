import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

const Nav = (props) => {
  return (
    <Menu fixed='top' size='large'>
      <Container>
        <Menu.Item header>Taringa Plus!</Menu.Item>
      </Container>
    </Menu>
  )
}

export default Nav
