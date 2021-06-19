// Packages
import React from 'react'
import { render, screen } from '@testing-library/react'
// Components
import Mars from './Mars'
// Helpers
import generateLocations from '../../hooks/useGrid/helpers/generateGrid'

describe('Mars', () => {
  const locations = generateLocations()
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
  const mockObstacles = [
    {
      x: 2,
      y: 1,
      id: 'r-1',
      direction: 1,
    },
    {
      x: 2,
      y: 2,
      id: 'r-2',
      direction: 1,
    },
  ]

  test('renders without exploding', () => {
    render(<Mars locations={locations} rovers={mockRovers} obstacles={mockObstacles} />)
    expect(screen.queryAllByTestId('rover')).toHaveLength(mockRovers.length)
    expect(screen.queryAllByTestId('obstacle')).toHaveLength(mockObstacles.length)
  })
})
