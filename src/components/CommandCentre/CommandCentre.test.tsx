// Packages
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
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
      x: 2,
      y: 1,
      id: 'r-2',
      direction: 1,
    },
  ]
  const setUpdatedRovers = jest.fn()

  test('renders without exploding', () => {
    render(<CommandCentre rovers={mockRovers} setUpdatedRovers={setUpdatedRovers} />)

    expect(screen.queryAllByTestId('rover-control')).toHaveLength(mockRovers.length)
  })

  test('should call setUpdatedRovers when valid command is provided', () => {
    render(<CommandCentre rovers={mockRovers} setUpdatedRovers={setUpdatedRovers} />)

    const input = screen.queryByTestId('rover-input-1')
    fireEvent.change(input, { target: { value: 'mmm' } })
    const button = screen.queryByTestId('rover-button-1')
    fireEvent.click(button)

    expect(setUpdatedRovers).toHaveBeenCalled()
  })

  test('should show error when invalid command is provided', () => {
    setUpdatedRovers.mockClear()
    render(<CommandCentre rovers={mockRovers} setUpdatedRovers={setUpdatedRovers} />)

    const input = screen.queryByTestId('rover-input-1')
    fireEvent.change(input, { target: { value: 'xgh' } })
    const button = screen.queryByTestId('rover-button-1')
    fireEvent.click(button)
    const error = screen.queryByText('Please enter a valid command')

    expect(error).toBeInTheDocument()
  })
})
