// Packages
import React from 'react'
import { render, screen } from '@testing-library/react'
// Components
import App from './App'

describe('App', () => {
  test('renders without exploding', () => {
    render(<App />)
    expect(screen.queryAllByTestId('location')).toHaveLength(100)
  })
})
