import React from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { Link } from '@rebass/emotion'
import { Link as GLink } from 'gatsby'

const NavLink = styled(Link)(css({
  display: 'block',
  textDecoration: 'none',
  fontWeight: 'bold',
  '&[aria-current]': {
    color: 'blue'
  }
}))

NavLink.defaultProps = {
  fontSize: 14,
  px: 2,
  py: 1,
  color: 'inherit',
}

const getProps = ({ isCurrent, className }) => isCurrent ? {
  className: className + ' active'
} : null

export default props =>
  <NavLink
    {...props}
    as={props.to ? GLink : 'a'}
  />
