import updateRoversLocation from './updateRoversLocation'

describe('updateRoversLocation', () => {
  const mockRover = {
    x: 2,
    y: 2,
    id: 'r-1',
    direction: 1,
  }
  const mockObstructions = [
    {
      x: 2,
      y: 5,
      id: 'o-1',
      direction: 1,
    },
  ]
  console.log = jest.fn()

  test('should turn left without moving', () => {
    const commands = ['l']
    const result = updateRoversLocation(commands, mockRover, mockObstructions)
    expect(result).toEqual({ ...mockRover, direction: 4 })
  })

  test('should turn right without moving', () => {
    const commands = ['r']
    const result = updateRoversLocation(commands, mockRover, mockObstructions)
    expect(result).toEqual({ ...mockRover, direction: 2 })
  })

  test('should wrap direction around', () => {
    const commands = ['r', 'r', 'r', 'r']
    const result = updateRoversLocation(commands, mockRover, mockObstructions)
    expect(result).toEqual(mockRover)
  })

  test('should handle multiple commands correctly', () => {
    const commands = ['r', 'm', 'l', 'm']
    const result = updateRoversLocation(commands, mockRover, mockObstructions)
    expect(result).toEqual({ ...mockRover, x: 3, y: 3 })
  })

  describe('North', () => {
    test('should move north correcly', () => {
      const commands = ['m']
      const result = updateRoversLocation(commands, mockRover, mockObstructions)
      expect(result).toEqual({ ...mockRover, y: 3 })
    })

    test('should wrap around north', () => {
      const northStartingRover = { ...mockRover, y: 10 }
      const commands = ['m']
      const result = updateRoversLocation(commands, northStartingRover, mockObstructions)
      expect(result).toEqual({ ...northStartingRover, y: 1 })
    })

    test('should avoid obstructions to the north', () => {
      const roverWithObstacleNorth = { ...mockRover, y: 4 }
      const commands = ['m']
      const result = updateRoversLocation(commands, roverWithObstacleNorth, mockObstructions)

      expect(console.log).toHaveBeenCalledWith('Impact!!')
      expect(result).toEqual(roverWithObstacleNorth)
    })
  })

  describe('East', () => {
    const direction = 2

    test('should move east correcly', () => {
      const eastFacingRover = { ...mockRover, direction }
      const commands = ['m']
      const result = updateRoversLocation(commands, eastFacingRover, mockObstructions)
      expect(result).toEqual({ ...eastFacingRover, x: 3 })
    })

    test('should wrap around east', () => {
      const eastStartingRover = { ...mockRover, x: 10, direction }
      const commands = ['m']
      const result = updateRoversLocation(commands, eastStartingRover, mockObstructions)
      expect(result).toEqual({ ...eastStartingRover, x: 1 })
    })

    test('should avoid obstructions to the east', () => {
      const roverWithObstacleEast = { ...mockRover, x: 1, y: 5, direction }
      const commands = ['m']
      const result = updateRoversLocation(commands, roverWithObstacleEast, mockObstructions)

      expect(console.log).toHaveBeenCalledWith('Impact!!')
      expect(result).toEqual(roverWithObstacleEast)
    })
  })

  describe('South', () => {
    const direction = 3

    test('should move south correcly', () => {
      const southFacingRover = { ...mockRover, direction }
      const commands = ['m']
      const result = updateRoversLocation(commands, southFacingRover, mockObstructions)
      expect(result).toEqual({ ...southFacingRover, y: 1 })
    })

    test('should wrap around south', () => {
      const southStartingRover = { ...mockRover, y: 1, direction }
      const commands = ['m']
      const result = updateRoversLocation(commands, southStartingRover, mockObstructions)
      expect(result).toEqual({ ...southStartingRover, y: 10 })
    })

    test('should avoid obstructions to the south', () => {
      const roverWithObstacleSouth = { ...mockRover, y: 6, direction }
      const commands = ['m']
      const result = updateRoversLocation(commands, roverWithObstacleSouth, mockObstructions)

      expect(console.log).toHaveBeenCalledWith('Impact!!')
      expect(result).toEqual(roverWithObstacleSouth)
    })
  })

  describe('West', () => {
    const direction = 4

    test('should move west correcly', () => {
      const westFacingRover = { ...mockRover, direction }
      const commands = ['m']
      const result = updateRoversLocation(commands, westFacingRover, mockObstructions)
      expect(result).toEqual({ ...westFacingRover, x: 1 })
    })

    test('should wrap around west', () => {
      const westStartingRover = { ...mockRover, x: 1, direction }
      const commands = ['m']
      const result = updateRoversLocation(commands, westStartingRover, mockObstructions)
      expect(result).toEqual({ ...westStartingRover, x: 10 })
    })

    test('should avoid obstructions to the west', () => {
      const roverWithObstacleWest = { ...mockRover, x: 3, y: 5, direction }
      const commands = ['m']
      const result = updateRoversLocation(commands, roverWithObstacleWest, mockObstructions)

      expect(console.log).toHaveBeenCalledWith('Impact!!')
      expect(result).toEqual(roverWithObstacleWest)
    })
  })
})
