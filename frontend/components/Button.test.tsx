import React from 'react'
import { render, screen } from '@testing-library/react'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import Button from './Button'

describe('Button tests', () => {
  it('should render primary', () => {
    render(<Button variant="primary">Some text</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/Some text/i)
  })
})
