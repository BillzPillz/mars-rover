import generateLocation from './generateLocation'

describe('generateLocation', () => {
  test('should correctly generate location', () => {
    const result = generateLocation()

    expect(result).toHaveProperty('x')
    expect(result.x).toBeGreaterThanOrEqual(1)
    expect(result.x).toBeLessThanOrEqual(10)

    expect(result).toHaveProperty('y')
    expect(result.y).toBeGreaterThanOrEqual(1)
    expect(result.y).toBeLessThanOrEqual(10)
  })
})
