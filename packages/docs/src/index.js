import React from 'react'
import Root from './root'
import Page from './page'
import Layout from './layout'

export const wrapPageElement = ({ element, props }) => {
  const children = (
    <Page>
      {element}
    </Page>
  )

  if (props.location.pathname === '/') return children

  return (
    <Layout>
      {children}
    </Layout>
  )
}

export const wrapRootElement = ({ element }) =>
  <Root>
    {element}
  </Root>
