import React from 'react'
import Root from './root'
import Page from './page'
import Sidebar from './sidebar'

export const wrapPageElement = ({ element, props }) => {
  const children = (
    <Page>
      {element}
    </Page>
  )

  if (props.location.pathname === '/') return children

  return (
    <Sidebar>
      {children}
    </Sidebar>
  )
}

export const wrapRootElement = ({ element }) =>
  <Root>
    {element}
  </Root>
