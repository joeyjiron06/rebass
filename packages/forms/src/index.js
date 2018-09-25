import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'

export const Label = styled(Text)({
})

Label.defaultProps = {
  as: 'label',
}
export const Input = styled(Box)({
})

Input.defaultProps = {
  as: 'input',
}

export const Select = styled(Box)({})

Select.defaultProps = {
  as: 'select',
}

export const Textarea = styled(Box)({})
export const Radio = styled(Box)({})
export const Checkbox = styled(Box)({})
