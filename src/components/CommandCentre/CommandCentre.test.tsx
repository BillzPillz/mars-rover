// Packages
import React from 'react'
import { render, screen } from '@testing-library/react'
// Components
import CommandCentre from './CommandCentre'

describe('CommandCentre', () => {
  const mockRovers = [
    {
      x: 1,
      y: 1,
      id: 'r-1',
      direction: 1,
    },
    {
      x: 1,
      y: 2,
      id: 'r-2',
      direction: 1,
    },
  ]
  const setUpdatedRovers = jest.fn()

  test('renders without exploding', () => {
    render(<CommandCentre rovers={mockRovers} setUpdatedRovers={setUpdatedRovers} />)
    expect(screen.queryAllByTestId('rover-control')).toHaveLength(mockRovers.length)
  })
})
