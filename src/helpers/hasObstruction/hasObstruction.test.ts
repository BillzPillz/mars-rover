import hasObstruction from './hasObstruction'

describe('hasObstruction', () => {
  const mockRover1 = {
    x: 1,
    y: 1,
    id: 'r-1',
    direction: 1,
  }
  const mockRover2 = {
    x: 1,
    y: 2,
    id: 'r-2',
    direction: 1,
  }
  const mockObstructions = [mockRover1]

  test('should return true if there is an obstruction in the same location', () => {
    const result = hasObstruction(mockRover1, mockObstructions)
    expect(result).toBe(true)
  })

  test('should return false if there isnt an obstruction in the same location', () => {
    const result = hasObstruction(mockRover2, mockObstructions)
    expect(result).toBe(false)
  })

  test('should return false if there is no obstructions supplied', () => {
    const result = hasObstruction(mockRover2)
    expect(result).toBe(false)
  })
})
