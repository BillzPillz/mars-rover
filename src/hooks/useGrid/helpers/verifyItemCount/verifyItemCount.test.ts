// Helper
import verifyItemCount from './verifyItemCount'
// Constants
import CONSTANTS from './constants'

describe('verifyItemCount', () => {
  const { MAX_ROVERS, MAX_OBSTACLES, MIN_OBSTACLES, MIN_ROVERS } = CONSTANTS

  test('should return rover count supplied if valid', () => {
    const roverCount = 4
    const result = verifyItemCount(roverCount, true)
    expect(result).toBe(roverCount)
  })

  test('should return obstacle count supplied if valid', () => {
    const obstacleCount = 10
    const result = verifyItemCount(obstacleCount)
    expect(result).toBe(obstacleCount)
  })

  test('should limit rovers to 10', () => {
    const roverCount = 11
    const result = verifyItemCount(roverCount, true)
    expect(result).toBe(MAX_ROVERS)
  })

  test('should lower limit rovers to 1', () => {
    const roverCount = 0
    const result = verifyItemCount(roverCount, true)
    expect(result).toBe(MIN_ROVERS)
  })

  test('should limit obstacles to 25', () => {
    const obstacleCount = 26
    const result = verifyItemCount(obstacleCount)
    expect(result).toBe(MAX_OBSTACLES)
  })

  test('should limit obstacles to 0', () => {
    const obstacleCount = -1
    const result = verifyItemCount(obstacleCount)
    expect(result).toBe(MIN_OBSTACLES)
  })
})
