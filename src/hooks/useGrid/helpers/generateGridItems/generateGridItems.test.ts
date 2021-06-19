import generateGridItems from './generateGridItems'

describe('generateGridItems', () => {
  test('should correctly generate rovers', () => {
    const roverCount = 4
    const result = generateGridItems(roverCount, true)
    expect(result.length).toBe(roverCount)
    expect(result[0].id).toBe('r-1')
  })

  test('should correctly generate obstacles', () => {
    const mockRovers = [
      {
        x: 1,
        y: 2,
        id: 'r-1',
        direction: 1
      }
    ]

    const obstacleCount = 10
    const result = generateGridItems(obstacleCount, false, mockRovers)
    expect(result.length).toBe(obstacleCount)
    expect(result[0].id).toBe('o-1')
  })
})
