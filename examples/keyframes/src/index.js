import React from 'react'
import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'
import {
  Box,
  Heading,
  Text,
} from 'rebass'

// styled-components keyframes *only* work with the `styled` function,
// not the Rebass `css` prop.
const spin = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`

const SpinningBox = styled(Box)`
  display: inline-block;
  animation-name: ${spin};
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`

class App extends React.Component {
  render() {
    return (
      <Text
        mx='auto'
        fontFamily='system-ui,sans-serif'
        css={{
          maxWidth: '768px'
        }}>
        <Box px={3} py={5} color='white' bg='blue'>
          <Heading as='h1' mb={4} fontSize={[ 4, 5, 6 ]}>
            Hello, Rebass
          </Heading>
          <SpinningBox color='blue' bg='white' p={3}>
            Spin
          </SpinningBox>
        </Box>
      </Text>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
