import React from 'react'
import styled from 'styled-components'
import {
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
  buttonStyle,
  shadow,
  background,
  variant,
} from 'styled-system'

const themed = key => props => props.theme[key]

export const Box = styled('div')({
  boxSizing: 'border-box',
  minWidth: 0,
  margin: 0,
},
  space,
  layout,
  typography,
  color,
  flexbox,
  themed('Box')
)

export const Flex = styled(Box)({
  display: 'flex'
},
  themed('Flex')
)

export const Text = styled(Box)(
  themed('Text')
)

export const Heading = styled(Text)({
  margin: 0,
},
  themed('Heading')
)

Heading.defaultProps = {
  as: 'h2',
  fontSize: 4,
  fontWeight: 'bold',
}

export const Link = styled(Box)(
  themed('Link')
)

Link.defaultProps = {
  as: 'a',
  color: 'blue'
}

export const Button = styled(Box)({
  appearance: 'none',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  textDecoration: 'none',
  border: 0,
},
  border,
  buttonStyle,
  themed('Button')
)

Button.defaultProps = {
  as: 'button',
  fontSize: 'inherit',
  fontWeight: 'bold',
  px: 3,
  py: 2,
  color: 'white',
  bg: 'blue',
  borderRadius: 4,
}

export const Image = styled(Box)({
  maxWidth: '100%',
  height: 'auto',
  margin: 0,
},
  border,
  themed('Image')
)

Image.defaultProps = {
  as: 'img',
}

const cards = variant({ key: 'cards' })

export const Card = styled(Box)(
  border,
  shadow,
  background,
  cards,
  themed('Card')
)
