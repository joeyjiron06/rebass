import React from 'react'
import { Flex, Box, Text } from '@rebass/emotion'
import styled from '@emotion/styled'
import { Location } from '@reach/router'
import Sidepane from 'sidepane'
import Sidebar from './sidebar'
import NavLink from './nav-link'

const breakpoint = 'screen and (min-width:40em)'

const removeSlash = str => str.replace(/\/$/, '')

const Pagination = ({
  navigation = []
}) =>
  <Location
    children={({ location }) => {
      const i = navigation.findIndex(n => n.href === removeSlash(location.pathname))
      const previous = navigation[i - 1]
      const next = navigation[i + 1]

      if (i < 0) return false

      return (
        <Flex py={4}>
          {previous && (
            <NavLink to={previous.href}>
              <Text fontSize={0}>
                Previous
              </Text>
              <Text fontSize={3}>
                {previous.text}
              </Text>
            </NavLink>
          )}
          <Box mx='auto' />
          {next && (
            <NavLink to={next.href}>
              <Text fontSize={0}>
                Next
              </Text>
              <Text fontSize={3}>
                {next.text}
              </Text>
            </NavLink>
          )}
        </Flex>
      )
    }}
  />

export default props => {
  const { navigation = [], github } = {} // site.siteMetadata

  return (
    <Flex>
      <Sidepane>
        <Box
          width={256}
          px={2}
          py={3}
          bg='white'
          style={{
            minHeight: '100vh'
          }}>
          <Sidebar />
          <Box my={4} />
          <NavLink href='https://github.com/rebassjs/rebass' children='GitHub' />
          <NavLink href='https://jxnblk.com' children='Made by Jxnblk' />
        </Box>
      </Sidepane>
      <Box
        {...props}
        mx='auto'
        px={4}
        py={4}
        width={1}
        style={{
          minWidth: 0,
          maxWidth: 768,
          minHeight: '100vh',
        }}>
        {props.children}
        <Pagination navigation={navigation} />
      </Box>
    </Flex>
  )
}
