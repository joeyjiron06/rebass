import React from 'react'
import { Box } from '@rebass/emotion'
import NavLink from './nav-link'
import Sidebar from './sidebar.mdx'

const ul = props =>
  <Box
    {...props}
    css={{
      backgroundColor: 'tomato',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    }}
  />

const wrapper = props =>
  <div
    {...props}
    style={{
      backgroundColor: 'cyan'
    }}
  />

const components = {
  wrapper,
  ul,
  a: NavLink,
}

export default props =>
  <Sidebar
    components={components}
  />
