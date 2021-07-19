import React from 'react'
import { render, screen } from '@testing-library/react'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import HomePage from '@pages/index'

describe('First test', () => {
  it('should render welcome text', () => {
    render(<HomePage />)
    expect(screen.getByRole('heading')).toHaveTextContent(
      /Welcome to Next.js E-commerce boilerplate!/i,
    )
  })
})
